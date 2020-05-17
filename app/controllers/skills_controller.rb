class SkillsController < PortfolioResourcesController
 
  protected
 
 
  def load_portfolio_resources
    @portfolio.skills
  end
 
 
  def load_portfolio_resource
    @portfolio.skills.find(params[:id])
  end
 
 
  def build_portfolio_resource
    @portfolio.skills.build
  end
 
 
  def portfolio_resource_params
    params.require(:skill).permit(:title, :percent)
  end
end