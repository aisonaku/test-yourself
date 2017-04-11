class Api::V1::AnswersController < ApplicationController
  before_action :set_answer

  def create
    if 
      UserAnswer.create(user: current_user, answer: @answer, question: @answer.question)
    else
      head 422
    end
  end

  private
  
  def set_answer
    parsed = ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: [:id])
    @answer = Answer.find(parsed[:id])  
  end
end
