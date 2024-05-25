# config/routes.rb
Rails.application.routes.draw do
  root 'home#index'
  get 'analytics', to: 'analytics#index'
  get 'dashboard', to: 'dashboard#index'
  mount ActionCable.server => '/cable'
end
