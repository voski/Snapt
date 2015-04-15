class AddCoordinatesToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :coordinates, :integer, array: true, default: []
  end
end
