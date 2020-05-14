class ExperiencesController < PortfolioResourcesController
 
  protected
 
 
  def load_portfolio_resources
    @portfolio.experiences
  end
 
 
  def load_portfolio_resource
    @portfolio.experiences.find(params[:id])
  end
 
 
  def build_portfolio_resource
    @portfolio.experiences.build
  end
 
 
  def portfolio_resource_params
    params.require(:experience).permit(:title, :company, :description, :start_date, :end_date)
  end
end