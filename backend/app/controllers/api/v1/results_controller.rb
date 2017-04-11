class Api::V1::ResultsController < ApplicationController
  before_action :set_quiz
  
  def index
    if @quiz
      @result = Result.find_by(quiz: @quiz, user: current_user)
      if @result.present?
        render json: @result
      else
    	 render json: Result.create(user: current_user, quiz: @quiz)
      end
    else
      render json: current_user.results
    end
	end

  def destroy
    if @quiz
      answers = current_user.user_answers
        .joins('JOIN questions ON questions.id = user_answers.question_id')
        .joins('JOIN quizzes ON quizzes.id = questions.quiz_id')
        .where('quizzes.id = ?', @quiz.id)
      
      result = Result.find_by(quiz: @quiz, user: current_user)
      
      if result.present? && answers.present?       
        answers.destroy_all  
        result.delete
      end
      
      head 200
    else
      head 400
    end
  end

private

  def set_quiz
    if params[:quiz_id].present?
      @quiz = Quiz.find(params[:quiz_id])
    end
  end
end