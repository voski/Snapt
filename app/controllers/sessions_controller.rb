class SessionsController < ApplicationController
  before_action :require_signed_out!, only: [:create, :new]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to root_url anchor: "users/#{@user.id}"
    else
      flash[:errors] = ['Invalid Credentials']
      redirect_to new_session_url
    end
  end

  def destroy
    sign_out
    render json: {response: 'logged out'}
  end
end
