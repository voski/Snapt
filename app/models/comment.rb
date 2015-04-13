# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  photo_id   :integer          not null
#  content    :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class Comment < ActiveRecord::Base
  validates :author_id, :photo_id, :content, presence: true
  validates :content, length: { maximum: 140 }

  belongs_to :photo
  belongs_to :author, class_name: 'User', foreign_key: :author_id
end
