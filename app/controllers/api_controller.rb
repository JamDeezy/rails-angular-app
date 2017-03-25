class ApiController < ApplicationController

  def index
    render json: {text: "hi"}
  end
end