json.array! comments do |comment|
  json.id comment.id
  json.content comment.content
  json.author do
    json.(comment.author, :username, :id)
  end
end
