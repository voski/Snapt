# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  url         :string           not null
#  created_at  :datetime
#  updated_at  :datetime
#  public_id   :string           not null
#  title       :text             default("Title"), not null
#  coordinates :integer          default([]), is an Array
#

class Photo < ActiveRecord::Base
  validates :author_id, :public_id, presence: true

  belongs_to :author, class_name: 'User', foreign_key: :author_id
  has_many :comments, dependent: :destroy

  default_scope { order(:created_at) }
end
