class Api::V1::QuizzesController < ActionController::Base
  before_action :set_category

  def index
		render json: @category.quizzes
	end

  def show
    render json: @category.quizzes.find(params[:id])
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end
end
