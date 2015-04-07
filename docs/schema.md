# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | boolean   | not null
private         | boolean   | not null
password_digest | string    | not null
session_token   | string    | not null, unique

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
url         | string    | not null, unique
title       | string    | not null

## Comments
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users)
photo_id       | integer   | not null, foreign key (references photos)
body           | string    | not null, max length 240
add_index [:author_id, photo_id], unique

## Followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id | integer   | not null, foreign key (references users)
follower_id | integer   | not null, foreign key (references users)
add_index [:folowee_id, follower_id], unique

## Mentions
column name | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references users)
comment_id        | integer   | not null, foreign key (references comments)
add_index [:user_id, comment_id], unique


## Tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## Taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)
add_index [:photo_id, tag_id], unique
