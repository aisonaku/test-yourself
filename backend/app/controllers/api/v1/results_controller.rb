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

  def set_quiz
    if params[:quiz_id].present?
      @quiz = Quiz.find(params[:quiz_id])
    end
  end
end