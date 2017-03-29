class Result
  attr_reader :user, :quiz

  def initialize(user:, quiz:)
    @user = user
    @quiz = quiz
  end

  def value
    @value ||= calculate
  end

  # hacks for serializer
  def id; 1 end
  def read_attribute_for_serialization(name)
    send(name)
  end

  private

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
