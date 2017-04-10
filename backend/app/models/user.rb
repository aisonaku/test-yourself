class User < ApplicationRecord
	has_many :user_answers
  has_many :results

  validates :name, :password, presence: true
end
