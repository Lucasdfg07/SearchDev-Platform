class Experience < ApplicationRecord
  belongs_to :portfolio

  validates :title, :description, :start_date, :company, presence: true

  validates_with DateIntervalValidator
end
