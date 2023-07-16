class SymbolFacade
  class << self
    def get_symbol(company)
      data = SymbolService.call_symbol(company)[:ResultSet][:Result]
      data.select { |result| result[:exchDisp] == 'NYSE' || result[:exchDisp] == 'NASDAQ' }
        .map { |result| SearchResult.new(result) }
    end
  end
end
