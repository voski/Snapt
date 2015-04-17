class Api::UsersController < ApplicationController
  def show
    @user = User.includes(
      :photo_comments,
      :photos,
      :photo_likers,
      :followees,
      :followers)
    .find(params[:id])

    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def search
    if params[:query].present?
      @users = User.where("lower(username) ~ ?", params[:query].downcase)
    else
      @users = User.none
    end

    render :search
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :profile_pic_pid)
  end
end
