class AddQuestionToUserAnswers < ActiveRecord::Migration[5.0]
  def change
    add_reference :user_answers, :question, foreign_key: true
  end
end
