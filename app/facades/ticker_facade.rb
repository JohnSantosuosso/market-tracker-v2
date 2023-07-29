class TickerFacade
    class << self
      def get_ticker
        data = TickerService.call_ticker[:quoteResponse][:result]
        data.map { |company| TickerCompany.new(company) } 
      end
    end
  end
  