json.array! comments do |comment|
  json.id comment.id
  json.content comment.content
  json.time_ago time_ago_in_words comment.created_at
  json.author do
    json.(comment.author, :username, :id, :profile_pic_pid)
  end
end
