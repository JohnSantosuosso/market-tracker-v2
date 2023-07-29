class WelcomeController < ApplicationController
  def index
    @ticker_data = TickerFacade.get_ticker.to_json
  end
end
