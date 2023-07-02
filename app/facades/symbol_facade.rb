class SymbolFacade
  class << self
    def get_symbol(company)
      data = SymbolService.call_symbol(company)[:ResultSet][:Results]
      # data_2 = SymbolService.call_symbol(movie, 2)[:results]
      # data = data_1 + data_2
      # data.map do |movie|
      #   Movie.new(movie)
    end
  end
end
