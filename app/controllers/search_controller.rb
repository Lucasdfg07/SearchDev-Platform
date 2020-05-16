class SearchController < ApplicationController
  skip_before_action :authenticate_user!
 
  def index
    @portfolios = SearchPortfoliosService.call(search_params)
  end
 
  private
 
  def search_params
    params['page'] ||= 1
    params.permit(:tag, :place, :remote_ok, :page)
  end
end