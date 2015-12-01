require 'rails_helper'

RSpec.describe Idea, type: :model do
  it "exists" do
    idea = create(:idea)

    expect(idea.title).to eq(Idea.last.title)
  end
end
