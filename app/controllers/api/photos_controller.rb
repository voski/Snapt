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

  def index
    @photos = User.find(params[:user_id]).photos
    render json: @photos
  end

  def destroy
    @photo = Photo.find(params[:id]);

    render json: @photo, status: 403 unless @photo.author = current_user

    if @photo
      Cloudinary::Uploader.destroy(@photo.public_id)
      @photo.destroy
      render json: @photo
    else
      render json: @photo.errors, status: 422
    end
  end

  def photo_params
    params.require(:photo).permit(:author_id, :url, :public_id)
  end
end
