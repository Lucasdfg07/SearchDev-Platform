class Education < ApplicationRecord
  belongs_to :portfolio
 
  validates :title, :description, :start_date, :institution, presence: true
  
  validates_with DateIntervalValidator
end
