class QuestionSerializer < ActiveModel::Serializer
  attributes :text, :answers, :answered

  def answers
    ActiveModelSerializers::SerializableResource.new(object.answers).serializable_hash
  end

  def answered
    object.answered_by?(current_user)
  end
end

