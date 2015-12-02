require "rails_helper"

RSpec.describe "Idea management", :type => :feature, js: true do
  scenario "User can see ideas" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    visit root_path

    expect(page).to have_text(idea1.title)
    expect(page).to have_text(idea2.title)
  end

  scenario "User can create new idea" do
    idea = build(:idea)

    visit root_path
    fill_in "title", with: idea.title
    fill_in "body", with: idea.body
    click_on "Create Idea"

    expect(page).to have_text(idea.title)
  end

  scenario "User can delete an idea" do
    idea = create(:idea)

    visit root_path
    within :css, "div.idea-#{idea.id}" do
      click_on "Delete"
    end

    expect(page).to_not have_text(idea.title)
  end
end
