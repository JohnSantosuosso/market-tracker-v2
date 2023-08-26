class TickerFacade
    class << self
      def get_ticker
        result = TickerService.call[:quoteResponse][:result]
        result.map { |company| TickerCompany.new(company) } 
      end
    end
  end
  