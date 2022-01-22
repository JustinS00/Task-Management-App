Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, except: [:new, :edit]
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'

end

