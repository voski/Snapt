module StaticPagesHelper
  def guest_username
    User.guest.username
  end
end
