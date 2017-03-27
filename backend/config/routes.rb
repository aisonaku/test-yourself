Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index, :show]
      resources :quizzes, only: [:index, :show] do
        resources :questions, only: [:index, :show]
        resources :results, only: [:index]
      end
    end
  end
  
end
