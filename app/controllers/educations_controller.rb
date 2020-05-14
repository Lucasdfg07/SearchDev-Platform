class EducationsController < PortfolioResourcesController
 
  protected
 
 
  def load_portfolio_resources
    @portfolio.educations
  end
 
 
  def load_portfolio_resource
    @portfolio.educations.find(params[:id])
  end
 
 
  def build_portfolio_resource
    @portfolio.educations.build
  end
 
 
  def portfolio_resource_params
    params.require(:education).permit(:title, :institution, :description, :start_date, :end_date)
  end
end