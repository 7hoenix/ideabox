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
end
