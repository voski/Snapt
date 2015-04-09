json.(@user, :username, :id)
json.photos do
  json.array! @user.photos, :id, :url, :author_id
end
