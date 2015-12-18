Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  get '/api/notebooks/liked', to: 'api/notebooks#liked'

  get '/api/notes/search', to: 'api/notes#search'

  namespace :api, defaults: {format: :json} do
    resources :notes, only: [:destroy, :update]
    resources :notebooks, only: [:create, :destroy, :update, :index, :show] do
      resources :notes, only: [:create, :index]
    end
  end

end
