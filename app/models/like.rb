# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  liker_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Like < ActiveRecord::Base
  belongs_to :photo
  belongs_to :liker, class_name: "User", foreign_key: :liker_id

  validates :liker_id, :photo_id, presence: true
  validates :liker_id, uniqueness: { scope: :photo_id }
end
