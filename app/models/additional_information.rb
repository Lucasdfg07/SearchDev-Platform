class AdditionalInformation < ApplicationRecord
  belongs_to :portfolio
  belongs_to :block
  
  validates :block_id, uniqueness: true
  validates :title, :description, presence: true
end
