class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category
  def category
    serializer = ActiveModel::Serializer.serializer_for(object.category).new(object.category)
    ActiveModel::Serializer::Adapter::JsonApi.new(serializer).as_json
  end
  
end
