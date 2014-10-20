Rails.application.routes.draw do

  root "quizzes#index"
  resources :quizzes
  resources :questions
end
