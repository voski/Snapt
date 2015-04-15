# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#  email           :string           not null
#  private         :boolean          default(FALSE), not null
#

class User < ActiveRecord::Base
  validates(
    :username,
    :session_token,
    :password_digest,
    :email,
    presence: true, uniqueness: true
  )

  validates :password, length: { minimum: 6, allow_nil: true }
  validates :private, inclusion: [true, false]
  after_initialize :ensure_session_token

  has_many :comments, foreign_key: :author_id, dependent: :destroy
  has_many :photos, foreign_key: :author_id, dependent: :destroy
  has_many :photo_likers, through: :photos, source: :likers
  has_many :photo_comments, through: :photos, source: :comments
  has_many :in_follows, class_name: "Follow", foreign_key: "followee_id", dependent: :destroy
  has_many :out_follows, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee

  has_many :feed, through: :followees, source: :photos

  attr_reader :password

  def initialize(params = nil)
    super
    @private = false
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password? (password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def follows?(user)
    out_follows.exists?(followee_id: user.id)
  end

  def follower?(user)
    self.in_follows.exists?(follower_id: user.id)
  end

  def followees_count
    self.followees.count(:all)
  end

  def followers_count
    self.followers.count(:all)
  end
  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
