class Update < ActiveRecord::Migration
  def change
    add_column :users, :email, :string, null: false, unique: true
    add_column :users, :private, :boolean, null: false, default: false

    add_index :users, :email, unique: true
  end
end
