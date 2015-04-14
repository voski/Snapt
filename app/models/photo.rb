# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  url        :string           not null
#  created_at :datetime
#  updated_at :datetime
#  public_id  :string           not null
#

class Photo < ActiveRecord::Base
  validates :author_id, :url, :public_id, presence: true

  belongs_to :author, class_name: 'User', foreign_key: :author_id
  has_many :comments
  
end
