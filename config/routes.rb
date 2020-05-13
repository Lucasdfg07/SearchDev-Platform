Rails.application.routes.draw do
  root 'pages#home'
  devise_for :users
 
  resources :portfolios, except: :new do
    resources :tags, only: [:create, :destroy], param: :tag_id, controller: :portfolio_tags
    resources :blocks, only: [:index, :create, :destroy]
    resources :profiles, only: [:index, :update]
  end
 
  resources :tags, only: :index
end