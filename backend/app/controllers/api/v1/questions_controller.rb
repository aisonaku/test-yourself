class Api::V1::QuestionsController < ApplicationController
  before_action :set_quiz

  def index
		render json: @quiz.questions
	end

  def show
    render json: @quiz.questions.find(params[:id])
  end

  private

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end
end