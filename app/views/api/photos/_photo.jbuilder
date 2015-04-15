json.id photo.id
json.author_id photo.author_id
json.public_id photo.public_id
json.title photo.title
json.time_ago time_ago_in_words(photo.created_at)
json.coordinates photo.coordinates

json.comments do
  json.partial! '/api/comments/comments', comments: photo.comments
end


json.likes do
  json.array! photo.likes do |like|
    json.id like.id
    json.liker do
      json.id like.liker.id
      json.username like.liker.username
    end
  end
end
