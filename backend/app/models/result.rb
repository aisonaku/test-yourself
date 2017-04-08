class Result < ApplicationRecord
  belongs_to :quiz
  belongs_to :user

  before_validation :set_value

  private

  def set_value
    self.value = calculate
  end

	def calculate
    user.user_answers
        .joins(:answer)
        .joins('JOIN questions ON questions.id = answers.question_id')
        .joins('JOIN quizzes ON quizzes.id = questions.quiz_id')
        .where('quizzes.id = ?', quiz.id)
        .where(answers: { is_correct: true })
        .count * 10.0
  end
end
