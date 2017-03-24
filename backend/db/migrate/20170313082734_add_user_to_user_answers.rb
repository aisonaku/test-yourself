class AddUserToUserAnswers < ActiveRecord::Migration[5.0]
  def change
    add_reference :user_answers, :user, foreign_key: true
  end
end
