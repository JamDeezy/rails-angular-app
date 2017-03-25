class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def app
    require 'open-uri'
    file = open Rails.application.config.client_url
    render inline: file.read
  end
end
