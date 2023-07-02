Rails.application.routes.draw do
  root 'welcome#index'

  get "/search", to: 'search#index'

  get "/symbol-lookup", to: 'symbol_lookup#index'
  get "/symbol-lookup/search", to: 'symbol_lookup#search', as: 'symbol_lookup_results' 

end
