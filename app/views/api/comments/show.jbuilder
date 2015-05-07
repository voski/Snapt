json.id @comment.id
json.content @comment.content
json.time_ago time_ago_in_words @comment.created_at

json.author @comment.author, :id, :username, :profile_pic_pid
