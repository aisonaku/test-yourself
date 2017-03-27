class Api::V1::QuizzesController < ApplicationController
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
    if params[:category_id].present?
      @category = Category.find(params[:category_id])
    end
  end
end
