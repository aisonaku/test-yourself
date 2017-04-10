class ResultSerializer < ActiveModel::Serializer
  attributes :value, :quiz

  def quiz
    ActiveModelSerializers::SerializableResource.new(object.quiz, scope: { current_user: current_user }).serializable_hash
  end
end
