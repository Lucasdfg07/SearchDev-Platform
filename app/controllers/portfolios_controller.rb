class PortfoliosController < ApplicationController
  before_action :load_portfolios, only: :index
  before_action :load_portfolio, only: [:edit, :update]
  skip_before_action :authenticate_user!, only: :show
 
 
  def index
    authorize(Portfolio)
  end
 
 
  def create
    build_portfolio
    authorize @portfolio
    @portfolio.save
    redirect_to edit_portfolio_path(@portfolio)
  end
 
 
  def show
    respond_to do |format|
      format.json { 
        @portfolio = Portfolio.find(params[:id])
        authorize @portfolio
        render json: { portfolio: @portfolio }, include: { tags: { only: [:id, :title] } }, status: :ok
      }
      format.html {
        @portfolio = Portfolio.find_by(slug: params[:slug])
        authorize @portfolio
      }
    end
  end
 
 
  def edit
    authorize @portfolio
  end
 
 
  def update
    build_portfolio
    authorize @portfolio
    save_and_render
  end
 
 
  private
 
 
  def save_and_render
    if @portfolio.save
      head :ok
    else
      render json: { errors: @portfolio.errors.full_messages, portfolio: @portfolio.reload }, status: :unprocessable_entity
    end
  end
 
 
  def build_portfolio
    @portfolio ||= portfolio_scope.build
    @portfolio.attributes = portfolio_params
  end
 
 
  def portfolio_params
    return {} unless params.has_key?(:portfolio)
    params.require(:portfolio).permit(:slug, :listed, :active, :remote_ok)
  end
 
 
  def load_portfolio
    @portfolio = portfolio_scope.find(params[:id])
  end
 
 
  def load_portfolios
    @portfolios = portfolio_scope.all
  end
 
 
  def portfolio_scope
    policy_scope(Portfolio)
  end
end