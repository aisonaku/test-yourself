class Quiz < ApplicationRecord
  belongs_to :category
  has_many :questions
  validates_presence_of :category
  validates :title, presence: true
  validates :description, presence: true
end
