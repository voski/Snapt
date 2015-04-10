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
        @users = User.where("lower(username) ~ ?", params[:query].downcase)
      else
        @users = User.none
      end

      render :search
    end
end
