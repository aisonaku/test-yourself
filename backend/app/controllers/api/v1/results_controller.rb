class Api::V1::ResultsController < ApplicationController
  before_action :set_quiz

  def index
		render json: Result.new(user: current_user, quiz: @quiz)
	end

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end
end