module ApplicationHelper
  def auth_token
    "<input type='hidden' name='authenticity_token' value='#{ form_authenticity_token }'>".html_safe
  end

  def sign_out_btn
    button_to 'Sign Out', session_url, method: :delete
  end
end
