class ProfilesController < PortfolioResourcesController
 
  protected
 
 
  def render_resource(profile)
    render json: { profile: profile }, methods: [:photo_url]
  end
 
 
  def load_portfolio_resources
    load_portfolio_resource
  end
 
 
  def load_portfolio_resource
    @portfolio.profile || @portfolio.create_profile(title: "My title", name: "My name")
  end
 
 
  def build_portfolio_resource
    @portfolio.build_profile
  end
 
 
  def portfolio_resource_params
    params.permit(:name, :title, :photo)
  end
end