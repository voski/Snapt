class Api::FollowsController < ApplicationController
  before_action :require_signed_in!

  def create
    follower = User.find(params[:user_id])
    @follow = current_user.out_follows.new(followee_id: follower.id)

    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!

    render json: @follow
  end
end
