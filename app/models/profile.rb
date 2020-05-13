class Profile < ApplicationRecord
  belongs_to :portfolio
 
  has_one_attached :photo
 
  validates :title, :name, presence: true
  validates :photo, file: { max_size_in_bytes: 3000, mime_types: [:jpg, :png] }

	def photo_url
		return "/assets/avatars/#{self.portfolio.temp_avatar}.png" unless self.photo.attached?
		Rails.application.routes.url_helpers.rails_blob_path(self.photo, only_path: true)
	end
end
