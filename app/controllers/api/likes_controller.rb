class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.liker = current_user

    if @like.save
      render :show
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
    render :show
  end

  def index
    @likes = User.find(params[:user_id]).likes
    render :index
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
