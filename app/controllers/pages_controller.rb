class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :is_user_logged_in?
 
  def home
  end
 
  private
 
  def is_user_logged_in?
    if current_user
      redirect_to portfolios_path
    end
  end
end