class Api::V1::QuizzesController < ActionController::Base
  before_action :set_category
  def index
    if @category
      render json: @category.quizzes 
    else 
      render json: Quiz.all, include: 'quizzes'
    end
  end


  def show
    render json: Quiz.find(params[:id])
  end

  def set_category
    if params[:categoryid].present?
      @category = Category.find(params[:categoryid])
    end
  end
  
end
