class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  serialization_scope :current_user
  
  def current_user
    User.first
  end
end
