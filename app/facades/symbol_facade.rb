class SymbolFacade
  class << self
    def get_symbol(company)
      data = SymbolService.call_symbol(company)[:ResultSet][:Result]
      data.map do |result|
        SearchResult.new(result)
      end
    end
  end
end
