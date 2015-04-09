class AddPublicIdToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :public_id, :integer

    Photo.reset_column_information

    Photo.all.each do |photo|
      photo.public_id = 'no_id'
      photo.save!
    end

    change_column :photos, :public_id, :integer, null: false
  end
end
