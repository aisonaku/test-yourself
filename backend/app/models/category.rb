class Category < ApplicationRecord
  has_many :quizzes
  validates :title, presence: true
end
