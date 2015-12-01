require "rails_helper"

RSpec.describe "Idea management", :type => :feature do
  xscenario "User can see ideas" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    visit root_path

    expect(page).to have_text(idea1.title)
    expect(page).to have_text(idea2.title)
  end
end
