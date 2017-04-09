Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index, :show]
      resources :quizzes,    only: [:index, :show]
      resources :questions,  only: [:index, :show]
      resources :results,    only: [:index]
      resources :answers,    only: [:create]
      resources :users,    only: [:index]
    end
  end

  root 'pages#index'
end
