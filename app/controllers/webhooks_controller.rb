class WebhooksController < ApplicationController
  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
 
  def webhooks
    moip_id = params['resource']['order']['id']
    order = Order.find_by(moip_id: moip_id)
 
    if params['event'] == 'ORDER.PAID'
      order.update(status: :active)
      order.portfolio.update(featured: true)
    elsif params['event'] == 'ORDER.NOT_PAID'
      order.update(status: :inactive)
    end
 
    render json: {status: :ok}
  end
end