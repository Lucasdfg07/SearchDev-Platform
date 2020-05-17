class MoipService
  attr_reader :token, :key
 
  def initialize()
    @token = get_token
    @key = get_key
  end
 
  def call
    authentication
  end
 
  private
 
  def get_token
    credentials[:token]
  end
 
  def get_key
    credentials[:key]
  end
 
  def credentials
    Rails.application.credentials[Rails.env.to_sym][:moip]
  end
 
  def authentication
    Moip2::Api.new(moip_client)
  end
 
  def moip_client
    Moip2::Client.new(:sandbox, moip_auth)
  end
 
  def moip_auth
    auth = Moip2::Auth::Basic.new(token, key)
  end
end