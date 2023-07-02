class SymbolsController < ApplicationController
  def index
  end

  def search
    if params[:company].present?
      company = params[:company]
      require 'pry'; binding.pry 
      @symbols = SymbolFacade.get_symbol(company)
    end
  end
end
