class ApplicationController < ActionController::Base
  serialization_scope :current_user
  
  def current_user
    User.first
  end
end
