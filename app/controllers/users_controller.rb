class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      redirect_to static_pages_url
    else
      flash.errors = @user.errors.full_messages
      render new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :private)
  end
end
