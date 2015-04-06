class StaticPagesController < ApplicationController
  def index
    render text: 'hello'
  end
end
