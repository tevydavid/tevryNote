Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :notes, only: [:destroy, :update, :show]
    resources :notebooks, only: [:create, :destroy, :update, :index, :show] do
      resources :notes, only: [:create, :index]
    end
  end

end
