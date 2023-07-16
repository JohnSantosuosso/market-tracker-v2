class SearchResult
    attr_reader :symbol, :name, :exchange
    def initialize(result)
        @symbol = result[:symbol]
        @name = result[:name]
        @exchange = result[:exchDisp]
    end
end