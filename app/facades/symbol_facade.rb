class SymbolFacade
  class << self
    def get_symbol(company)
      result = SymbolService.call(company)[:ResultSet][:Result]
      result.select { |result| result[:exchDisp] == 'NYSE' || result[:exchDisp] == 'NASDAQ' }
        .map { |result| SearchResult.new(result) }
    end
  end
end
