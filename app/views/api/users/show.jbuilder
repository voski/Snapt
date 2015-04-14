json.(@user, :username, :id)

json.photos do
  json.array! @user.photos do |photo|
    json.id photo.id
    json.public_id photo.public_id
    json.time_ago time_ago_in_words(photo.created_at)
    json.author_id photo.author_id
  end
end

json.followees do
  json.array! @user.followees, :id, :username
end

json.followers do
  json.array! @user.followers, :id, :username
end
