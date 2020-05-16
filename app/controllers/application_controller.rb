class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  include Pundit
 
  rescue_from Pundit::NotAuthorizedError do
    respond_to do |format|
      format.html { redirect_to root_path, flash: { error: 'Unauthorized' } }
      format.json { render json: { errors: ['Unauthorized'] }, status: :unauthorized }
    end
  end
 
  def after_sign_in_path_for(resource)
    portfolios_path
  end
  
  rescue_from ActiveRecord::RecordNotFound do
    render file: "#{Rails.root}/public/404", status: :not_found
  end
end