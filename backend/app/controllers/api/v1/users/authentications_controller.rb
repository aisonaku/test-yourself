class Api::V1::Users::AuthenticationsController < ApplicationController
  skip_before_action :authenticate!

  def create
    if params[:name].present? && params[:password].present?
      username = params[:name]
      password = Digest::SHA1.hexdigest(params[:password])
      if user = User.find_by(name: username, password: password)
        user.update_attribute(:auth_token, SecureRandom.hex)
        cookies[:auth_token] = user.auth_token
        render json: {auth_token: user.auth_token}
      else
        render status: 422, json: {error: 'Пользователь не найден'}
      end
    else
      render  status: 422, json: { error: 'Пароль и имя пользователя не могут быть пустыми' }
    end
  end
end