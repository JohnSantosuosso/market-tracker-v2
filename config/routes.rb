Rails.application.routes.draw do
  root 'welcome#index'

  get "/search", to: 'search#index'

  get "/symbol-lookup", to: 'symbols#index'
  get "/symbol-lookup/search", to: 'symbols#search', as: 'symbol_lookup_results' 

end
