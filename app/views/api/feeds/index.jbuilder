json.array! @feed do |feed_photo|
  json.id feed_photo.id
  json.public_id feed_photo.public_id
  json.author_id feed_photo.author_id
  json.time_ago time_ago_in_words(feed_photo.created_at)
end
