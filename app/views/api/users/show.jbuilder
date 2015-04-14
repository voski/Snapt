json.(@user, :username, :id)

json.photos do
  json.array! @user.photos do |photo|
    json.partial! 'api/photos/photo', photo: photo
  end
end

json.followees do
  json.array! @user.followees, :id, :username
end

json.followers do
  json.array! @user.followers, :id, :username
end
