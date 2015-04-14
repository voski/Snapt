json.array! @feed do |feed_photo|
  json.partial! '/api/photos/photo', photo: feed_photo
end
