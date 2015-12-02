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

  def update
    if params[:value]
      render json: Idea.change_quality(params[:id], params[:value].to_i)
    else
      idea_params = params[:idea]
      idea = Idea.find(idea_params[:id])
      idea.update(title: idea_params[:title], body: idea_params[:body])
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
