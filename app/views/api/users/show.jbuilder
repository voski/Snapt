json.(@user, :username, :id)

json.photos do
  json.array! @user.photos, :id, :url, :author_id, :public_id
end

json.followees do
  json.array! @user.followees, :id, :username
end

json.followers do
  json.array! @user.followers, :id, :username
end
