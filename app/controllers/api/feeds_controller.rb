class Api::FeedsController < ApplicationController
  before_action :require_signed_in!

  def index
    @feed = current_user.feed.
      includes(:comments, :likes, :likers, :comment_authors).
      order("photos.created_at")


    render :index
  end

end
