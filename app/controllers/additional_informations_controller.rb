class AdditionalInformationsController < PortfolioResourcesController
 
  protected
 
 
  def load_portfolio_resources
    @portfolio.additional_informations.find_by(block_id: params[:block_id]) ||
    @portfolio.additional_informations.create(title: "My title", description: "My description", block_id: params[:block_id])
  end
 
 
  def load_portfolio_resource
    @portfolio.additional_informations.find(params[:id])
  end
 
 
  def build_portfolio_resource
    @portfolio.additional_informations.build
  end
 
 
  def portfolio_resource_params
    params.require(:additional_information).permit(:title, :description)
  end
end