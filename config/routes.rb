Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
 
  resources :portfolios, except: :new do
    resources :tags, only: [:create, :destroy], param: :tag_id, controller: :portfolio_tags
    resources :blocks, only: [:index, :create, :destroy]
  end
 
  resources :tags, only: :index
end