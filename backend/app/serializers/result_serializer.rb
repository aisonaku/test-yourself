class ResultSerializer < ActiveModel::Serializer
  attributes :value, :quiz

  def quiz
    serializer = ActiveModel::Serializer.serializer_for(object.quiz).new(object.quiz)
    ActiveModel::Serializer::Adapter::JsonApi.new(serializer).as_json
  end
end
