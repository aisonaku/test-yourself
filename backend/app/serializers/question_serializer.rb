class QuestionSerializer < ActiveModel::Serializer
  attributes :text, :answers

  def text
    object.text.html_safe
  end

  def answers
    ActiveModelSerializers::SerializableResource.new(object.answers).serializable_hash
  end
end

