class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id]);
    render json: @photo
  end


  def photo_params
    params.require(:photo).permit(:author_id, :url)
  end

  def index
    @photos = current_user.photos
    render json: @photos
  end
end
