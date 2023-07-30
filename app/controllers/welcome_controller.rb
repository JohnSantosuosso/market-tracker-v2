class WelcomeController < ApplicationController
  def index
    @ticker_data = TickerFacade.get_ticker.to_json
  end

  def refresh_ticker_data
    updated_ticker_data = TickerFacade.get_ticker.to_json
    render json: updated_ticker_data
  end
end
