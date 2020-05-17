class Portfolio < ApplicationRecord
  MAX_NUMBER_OF_TAGS = 4
  paginates_per 5
 
  before_validation :set_slug, on: :create
 
  belongs_to :user
 
  has_one :profile, :dependent => :destroy
  has_one :about, :dependent => :destroy
  has_one :order
 
  has_many :blocks, :dependent => :destroy
  has_many :portfolio_tags, :dependent => :destroy
  has_many :tags, through: :portfolio_tags
  has_many :educations, :dependent => :destroy
  has_many :experiences, :dependent => :destroy
  has_many :hobbies, :dependent => :destroy
  has_many :skills, :dependent => :destroy
  has_many :languages, :dependent => :destroy
  has_many :socials, :dependent => :destroy
  has_one :contact, :dependent => :destroy
  has_many :additional_informations, :dependent => :destroy
 
  validates :slug, presence: true, uniqueness: true
  validates :tags, length: { in: 0..MAX_NUMBER_OF_TAGS, message: "can't have more than #{MAX_NUMBER_OF_TAGS} tags" }
 
 
  enum temp_avatar: { blue_robot: 0, green_robot: 1, orange_red_robot: 2, purple_robot: 3, red_robot: 4, yellow_robot: 5 }
 
 
  before_create :set_random_temp_avatar
 
 
  private
 
 
  def set_random_temp_avatar
    avatars_list = Portfolio.temp_avatars.keys
    self.temp_avatar = avatars_list.sample
  end
 
  def set_slug
    if self.slug.nil?
      slug_generator = PortfolioSlugGeneratorService.new
      self.slug = slug_generator.call
    end
  end
 
end