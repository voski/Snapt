json.id photo.id
json.author_id photo.author_id
json.public_id photo.public_id
json.title photo.title
json.time_ago time_ago_in_words(photo.created_at)

json.comments do
  json.partial! '/api/comments/comments', comments: photo.comments
end
