class Api::V1::QuizzesController < ActionController::Base
  def index
    render json: Quiz.all, include: 'quizzes'
  end

  def show
    render json: Quiz.find(params[:id])
  end

  
end
