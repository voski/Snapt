class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?, :guest_user
  private

  def guest_user
    @guest_user = User.find_by_guest(true)
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    user.reset_token!
    @current_user = user
    session[:session_token] = user.session_token
  end

  def sign_out
    @current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def require_signed_out!
    redirect_to root_url anchor: "users/#{@current_user.id}" if signed_in?
  end


end
