class ApplicationController < ActionController::Base
  serialization_scope :current_user

  attr_reader :current_user

  # before_action :authenticate!

  def authenticate!
    @current_user = User.find_by(auth_token: cookies[:auth_token]) if cookies[:auth_token].present?
    head 401 unless current_user
  end
end
