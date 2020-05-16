class ContactFormMailer < ApplicationMailer
  default from: 'dev@onebitcode.com'

  def contact
    @user = params[:user]
    @email = params[:email]
    @title = params[:title]
    @description = params[:description]
    @portfolio = params[:portfolio]

    mail(
          to: @user.email,
          subject: 'Uma empresa te enviou uma mensagem em dev.onebitcode.com',
          reply_to: @email,
        )
  end
end