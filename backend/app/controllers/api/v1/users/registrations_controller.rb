class Api::V1::Users::RegistrationsController < ApplicationController
  skip_before_action :authenticate!

  def create
    if params[:confirmation_password] == params[:password] 
      username = params[:name]
      password = Digest::SHA1.hexdigest(params[:password])
      if User.find_by(name: username, password: password)
        render status: 422, json: { error: 'Пользователь с таким именем уже существует' }
      else
        user = User.new(
          name: username, 
          password: password,
          auth_token: SecureRandom.hex)
        if user.save
          cookies[:auth_token] = user.auth_token
          render json: { auth_token: user.auth_token }
        else
          render  status: 422, json: { error: 'Пароль и имя пользователя не могут быть пустыми' }
        end
      end

    else
      render status: 422, json: { error: 'Пароли не совпадают' }
    end
  end
end