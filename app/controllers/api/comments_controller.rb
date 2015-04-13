class Api::CommentsController < ApplicationController
  before_action :require_signed_in!

  def index
    @comments = Photo.find(params[:photo_id]).comments
    render json: @comments
  end
end
