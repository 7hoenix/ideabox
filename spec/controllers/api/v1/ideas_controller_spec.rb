require "rails_helper"

RSpec.describe Api::V1::IdeasController, type: :controller do

  include Controllers::JsonHelpers
  describe "GET index" do
    it "returns a listing of all ideas" do
      idea1 = create(:idea)
      idea2 = create(:idea)

      get :index, format: :json

      expect(response.status).to eq(200)
      expect(json.first["body"]).to eq(idea1.body)
      expect(json.last["body"]).to eq(idea2.body)
    end
  end

  describe "POST create" do
    it "creates a new idea and returns true" do
      idea = build(:idea)
      data = { title: idea.title, body: idea.body }

      post :create, data, format: :json

      expect(response.status).to eq(200)
    end
  end

  describe "PUT UPDATE" do
    it "updates the idea with new content" do
      idea = create(:idea)
      data = { id: idea.id, title: "CAKE", body: "IS GOOD" }

      put :update, id: idea.id, idea: data, format: :json

      expect(response.status).to eq(200)
      expect(json["body"]).to eq("IS GOOD")
      expect(json["title"]).to eq("CAKE")
    end
  end
end
