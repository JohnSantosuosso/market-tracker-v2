class WelcomeController < ApplicationController
  def index
    @ticker_data = TickerService.call_ticker
  end
end
