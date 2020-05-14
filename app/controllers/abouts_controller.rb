class AboutsController < PortfolioResourcesController
 
  protected
    
 
  def load_portfolio_resources
    load_portfolio_resource
  end
 
 
  def load_portfolio_resource
    @portfolio.about || @portfolio.create_about(description: "My description")
  end
 
 
  def build_portfolio_resource
    @portfolio.build_about
  end
 
 
  def portfolio_resource_params
    params.require(:about).permit(:description)
  end
end