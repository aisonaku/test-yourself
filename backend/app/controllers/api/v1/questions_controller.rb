class Api::V1::QuestionsController < ApplicationController
  before_action :set_quiz

  def index
    @result = Result.find_by(quiz: @quiz, user: current_user)
    if @result.present?
      redirect_to api_v1_results_path(quiz_id: @quiz.id)
    else
		  render json: @quiz.questions
    end
	end

  def show
    render json: @quiz.questions.find(params[:id])
  end

  private

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end
end