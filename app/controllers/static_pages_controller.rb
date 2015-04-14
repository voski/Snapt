class StaticPagesController < ApplicationController
  before_action :require_signed_in!

  def index
  end

  def go_to_feed_if_signed_in!
  end
end
