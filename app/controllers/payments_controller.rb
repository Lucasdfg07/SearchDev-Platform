class PaymentsController < ApplicationController
  before_action :set_portfolio
 
  def index
    @order = @portfolio.order
  end
 
  def create
    @order = MoipCreateOrderService.new(@portfolio, params).call
    MoipCreatePaymentService.new(@order, params).call
    redirect_to "/portfolios/#{params[:portfolio_id]}/payments"
  end
 
  private
 
    def set_portfolio
      @portfolio = Portfolio.where(id: params[:id], user_id: current_user).first
      redirect_to portfolios_path unless @portfolio.present?
    end
end