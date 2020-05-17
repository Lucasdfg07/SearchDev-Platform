class Order < ApplicationRecord
	belongs_to :portfolio, optional: true
	enum status: [:waiting, :inactive, :active]

	before_create :set_due_date

	private

	def set_due_date
	 # Estamos fixando 1 mês de assinatura
	 self.due_date = Time.now + 1.month
	end
end