class SymbolService
  class << self
    def call_symbol(company)
      response = connection.get("/v6/finance/autocomplete?lang=en&query=#{company}")
      require 'pry'; binding.pry 
      parse_data(response)
    end

  private
    def connection
      Faraday.new(url: "https://yfapi.net") do |faraday|
        faraday.headers["X-API-KEY"] = ENV['ah_api_key']
      end
    end

    def parse_data(response)
      JSON.parse(response.body, symbolize_names: true)
    end
  end
end
