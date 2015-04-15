class Api::CommentsController < ApplicationController
  before_action :require_signed_in!

  def index
    @comments = Photo.includes(:author).find(params[:photo_id])
    render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def destroy
    @comment = Comment.find(params[:id]);

    render json: @comment, status: 403 unless @comment.author = current_user

    if @comment
      @comment.destroy
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:author_id, :photo_id, :content)
  end
end
