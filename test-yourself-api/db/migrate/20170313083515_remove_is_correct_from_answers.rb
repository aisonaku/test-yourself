class RemoveIsCorrectFromAnswers < ActiveRecord::Migration[5.0]
  def change
    remove_column :answers, :isCorrect, :boolean
  end
end
