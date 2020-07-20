class DogsController < ApplicationController
  def index
    @dogs = Dog.all

    render json: { dogs: @dogs }
  end
end
