class MoipCreateOrderService
  def initialize portfolio, params
    @api = MoipService.new.call
    @moip_code = generate_moip_code
    @user_moip_code = generate_moip_code
    @portfolio = portfolio
    @params = params
  end
 
  def call
    @order = @api.order.create(order_json)
    Order.create(moip_id: @order["id"], status: :waiting, portfolio: @portfolio)
  end
 
  private
 
  def order_json
    {
      ownId: @moip_code,
      amount: {
        currency: 'BRL',
      },
      items: [
        {
          product: 'Premium Dev OneBitCode',
          category: 'OTHER_CATEGORIES',
          quantity: 1,
          detail: '1 mês de premium do dev.onebitcode.com',
          price: 1500
        }
      ],
      customer: {
        ownId: @user_moip_code,
        fullname: @params[:fullname],
        email: @params[:email],
        taxDocument: {
          type: 'CPF',
          number: @params[:cpf]
        },
        phone: {
          countryCode: '55',
          areaCode: @params[:phone][:area_code],
          number: @params[:phone][:number]
        },
        shippingAddress: {
          street: @params[:address][:street],
          streetNumber: @params[:address][:number],
          city: @params[:address][:city],
          district: @params[:address][:district],
          state: @params[:address][:state],
          country: @params[:address][:country],
          zipCode: @params[:address][:zipcode]
        }
      }
    }
  end
 
  def generate_moip_code
    (0...20).map { ('a'..'z').to_a[rand(26)] }.join
  end
end