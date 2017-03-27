class QuestionSerializer < ActiveModel::Serializer
  attributes :text, :answers

  def answers
    ActiveModelSerializers::SerializableResource.new(object.answers).serializable_hash
  end
end

