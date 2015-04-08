Rails.application.routes.draw do
  root to: 'static_pages#index'
  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]
end
