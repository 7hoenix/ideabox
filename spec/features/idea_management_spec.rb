require "rails_helper"

RSpec.describe "Idea management", :type => :feature, js: true  do
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

  scenario "User can change the quality of an idea" do
    idea = create(:idea)
    options = Idea.qualities
    visit root_path
    within :css, "div.idea-#{idea.id}" do
      expect(page).to have_text(options[0])

      click_on "Thumbs up"

      expect(page).to have_text(options[1])

      click_on "Thumbs up"

      expect(page).to have_text(options[2])

      click_on "Thumbs up"

      expect(page).to have_text(options[2])

      click_on "Thumbs down"

      expect(page).to have_text(options[1])

      click_on "Thumbs down"

      expect(page).to have_text(options[0])

      click_on "Thumbs down"

      expect(page).to have_text(options[0])
    end
  end

  scenario "User can edit title and body" do
    idea = create(:idea)
    visit root_path
    within :css, "div.idea-#{idea.id}" do
      click_on "Edit"
      fill_in "title-#{idea.id}", with: "CAKE"
      fill_in "body-#{idea.id}", with: "IS GOOD"
      click_on "Update Idea"

      expect(page).to_not have_text(idea.title)
      expect(page).to_not have_text(idea.body)
      expect(page).to have_text("CAKE")
      expect(page).to have_text("IS GOOD")
    end
  end
end
