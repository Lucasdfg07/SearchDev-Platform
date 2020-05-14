class Block < ApplicationRecord
  belongs_to :portfolio
  
  has_one :additional_information, dependent: :delete

  enum kind: { profile: 1, about: 2, education: 3, experience: 4, 
              hobby: 5, skill: 6, language: 7, social: 8, contact: 9, 
              additional_information: 10, contact_form: 11 }
 
  enum side: { left: 1, right: 2 }, _suffix: true
 
  validates :side, presence: true
  validates :position, presence: true
 
  validates_with KindSideValidator
    
  validates :kind, presence: true, uniqueness: { scope: :portfolio_id }
 
  before_validation :set_position, on: :create, unless: -> { self.position.present? }
 
 
  private
 
	def set_position
	  last_block_position = self.portfolio.blocks.where(side: self.side).maximum(:position)
	  self.position = last_block_position ? last_block_position + 1 : 0
	end
end