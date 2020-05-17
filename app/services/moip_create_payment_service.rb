class MoipCreatePaymentService
  def initialize order, params
    @api = MoipService.new.call
    @order = order
    @params = params
  end

  def call
    @payment = @api.payment.create(@order.moip_id, payment_json)
  end

  private
 
    def payment_json
      {
        installment_count: 1,
        funding_instrument: {
            method: "CREDIT_CARD",
            credit_card: {
                hash: @params[:card_hash],
                holder: {
                  fullname: @params[:card][:fullname],
                  birthdate: @params[:card][:birthdate],
                  tax_document: {
                    type: "CPF",
                    number: @params[:card][:cpf]
                  }
                }
            }
        }
      }
    end
end