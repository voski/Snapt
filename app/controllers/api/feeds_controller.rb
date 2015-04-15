class Api::FeedsController < ApplicationController
  before_action :require_signed_in!

  def index
    @feed = current_user.feed.order(:created_at).includes(:comments, :likes, :likers, :comment_authors)
    render :index
  end

end
