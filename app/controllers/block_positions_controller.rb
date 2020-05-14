class BlockPositionsController < ApplicationController
  before_action :load_portfolio
 
  def update
    @rebuild_blocks_positions = RebuildBlocksPositionsService.new(blocks_params["blocks"])
    save_blocks_positions || render_old_positions
  end
 
 
  private
 
 
  def render_old_positions
    render json: { old_blocks: @portfolio.blocks }, status: :unprocessable_entity
  end
 
 
  def save_blocks_positions
    if @rebuild_blocks_positions.call
     head :ok
   end
  end
 
 
  def blocks_params
    params.permit(blocks: [:id, :position])
  end
 
 
  def load_portfolio
    @portfolio = policy_scope(Portfolio).find(params[:portfolio_id])
    authorize @portfolio, policy_class: PortfolioResourcePolicy
  end
end