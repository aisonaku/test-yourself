class ApplicationController < ActionController::Base
  serialization_scope :current_user

  # attr_reader :current_user

  def current_user
    User.first
  end
  # before_action :authenticate!

  def authenticate!
    @current_user = User.find_by(auth_token: cookies[:auth_token]) if cookies[:auth_token].present?
    head 401 unless current_user
  end
end
