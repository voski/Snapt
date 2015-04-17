class AddProfilePicToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_pic_pid, :string
  end
end
