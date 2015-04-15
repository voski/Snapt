Rails.application.routes.draw do
  root to: 'static_pages#index'

  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:show, :index] do
      get "search", on: :collection

      resources :photos, only: [:index]
      resource :follow, only: [:create, :destroy]
    end

    resources :photos, only: [:create, :destroy, :show, :update] do
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end

    resources :comments, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy, :show]
    resources :feeds, only: [:index]
  end

end
