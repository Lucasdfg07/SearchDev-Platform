class About < ApplicationRecord
  belongs_to :portfolio

  validates :description, presence: true
end
