class HobbiesController < PortfolioResourcesController
 
  protected
 
 
  def load_portfolio_resources
    @portfolio.hobbies
  end
 
 
  def load_portfolio_resource
    @portfolio.hobbies.find(params[:id])
  end
 
 
  def build_portfolio_resource
    @portfolio.hobbies.build
  end
 
 
  def portfolio_resource_params
    params.require(:hobby).permit(:title, :percent)
  end
end