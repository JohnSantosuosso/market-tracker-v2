class TickerCompany
    attr_reader :symbol, :name, :price, :change
    def initialize(company)
        @symbol = company[:symbol]
        @name = company[:displayName]
        @price = company[:regularMarketPrice]
        @change = company[:regularMarketChangePercent]
    end
end