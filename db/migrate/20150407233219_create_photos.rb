class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.string :url, null: false
      t.timestamps 
    end
  end
end
