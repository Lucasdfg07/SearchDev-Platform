class SocialsController < PortfolioResourcesController
 
  protected
 
 
  def load_portfolio_resources
    @portfolio.socials
  end
 
 
  def load_portfolio_resource
    @portfolio.socials.find(params[:id])
  end
 
 
  def build_portfolio_resource
    @portfolio.socials.build
  end
 
 
  def portfolio_resource_params
    params.require(:social).permit(:kind, :url)
  end
end