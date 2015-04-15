class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.liker = current_user

    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(parmas[:id])
    render json: @like, status: 403 unless @like.liker = current_user

  end

  def show
    @like = Like.find(params[:id])
    render json: @like
  end

  def index
    @likes = Photo.find(params[:photo_id]).likes.includes(:liker)
    render json: @likes
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
