class ChangePublicIdtoString < ActiveRecord::Migration
  def change
    @photos = Photo.all

    remove_column :photos, :public_id

    add_column :photos, :public_id, :string

    @photos.each do |photo|
      photo.public_id = 'no_id'
      photo.save!
    end

    change_column :photos, :public_id, :string, null: false
  end
end
