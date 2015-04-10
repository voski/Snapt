class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def search
      if params[:query].present?
        @users = User.where("username ~ ?", params[:query])
      else
        @users = User.none
      end

      render :search
    end
end
