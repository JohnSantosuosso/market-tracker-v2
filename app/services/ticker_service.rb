class TickerService
    class << self
      def call_ticker
        response = connection.get("/v6/finance/quote?region=US&lang=en&symbols=AAPL,MSFT,GOOGL,AMZN,NVDA")
        parse_data(response)
      end
  
    private
      def connection
        Faraday.new(url: "https://yfapi.net") do |faraday|
          faraday.headers["x-api-key"] = ENV['ah_api_key']
        end
      end
  
      def parse_data(response)
        JSON.parse(response.body, symbolize_names: true)
      end
    end
  end
  