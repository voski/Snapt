Rails.application.routes.draw do
  resources :static_pages, only: [:index], path: ''
  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]
end
