class CheckSubscriptionsService
  def call
    Order.where(status: :active).each do |order|
      if order.due_date <= Time.now
        order.update(status: :inactive)
        order.portfolio.update(featured: false)
      end
    end
  end
end