class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.reset_token!
      fail
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :private)
  end
end
