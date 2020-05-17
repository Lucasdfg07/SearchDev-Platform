class ContactFormsController < ApplicationController
  skip_before_action :authenticate_user!
  
  def create
    @user = User.find(params[:user_id])
    @portfolio = Portfolio.find(params[:portfolio_id])
 
    ContactFormMailer.with({
        user: @user,
        portfolio: @portfolio,
        email: params[:email],
        title: params[:title],
        description: params[:description]
    }).contact.deliver
 
    render json: :ok
  end
end