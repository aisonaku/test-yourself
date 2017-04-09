class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :completed

  def completed
    user = defined?(current_user) ? current_user : scope[:current_user]
    result = Result.find_by(quiz: object, user: user)
    result.present?
  end

  def category
    serializer = ActiveModel::Serializer.serializer_for(object.category).new(object.category)
    ActiveModel::Serializer::Adapter::JsonApi.new(serializer).as_json
  end
end
