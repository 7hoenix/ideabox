class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all, as: :json
  end

  def create
    idea = Idea.new(title: params["title"], body: params["body"])
    if idea.save
      render json: idea
    end
  end

  def destroy
    idea = Idea.find(params[:id])
    if idea.destroy
      render json: true
    end
  end
end
