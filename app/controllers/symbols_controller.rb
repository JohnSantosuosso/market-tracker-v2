class SymbolsController < ApplicationController
  def index
  end

  def search
    if params[:company].present?
      company = params[:company]
      @symbols = SymbolFacade.get_symbol(company)
    end
  end
end
