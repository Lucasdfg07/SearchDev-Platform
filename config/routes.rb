Rails.application.routes.draw do
  get 'webhooks/webhook'
  root 'pages#home'
  get :search, to: "search#index"
  devise_for :users
  resources :contact_forms, only: [:create]
 
  resources :portfolios, except: :new do
    member do
      resources :payments, only: [:index, :create]
    end
    resources :tags, only: [:create, :destroy], param: :tag_id, controller: :portfolio_tags
    resources :blocks, only: [:index, :create, :destroy] do
      resources :additional_informations, only: [:index, :update]
      patch :positions, on: :collection, to: "block_positions#update"
    end
    resources :profiles, only: [:index, :update]
    resources :experiences, only: [:index, :create, :destroy]
    resources :educations, only: [:index, :create, :destroy]
    resources :skills, only: [:index, :create, :destroy]
    resources :hobbies, only: [:index, :create, :destroy]
    resources :languages, only: [:index, :create, :destroy]
    resources :abouts, only: [:index, :update]
    resources :socials, only: [:index, :create, :destroy]
    resources :abouts, only: [:index, :update]
  end
 
  resources :tags, only: :index
  get '/:slug', to: 'portfolios#show'

  post '/webhooks', to: 'webhooks#webhooks'
end