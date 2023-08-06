Rails.application.routes.draw do
  root 'welcome#index'
  get '/refresh_ticker_data', to: 'welcome#refresh_ticker_data'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/signup', to 'users#new'

  get "/search", to: 'search#index'

  get "/symbol-lookup", to: 'symbols#index'
  get "/symbol-lookup/search", to: 'symbols#search', as: 'symbol_lookup_results' 

end
