class AddTitleToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :title, :text, default: 'Title', null: false
  end
end
