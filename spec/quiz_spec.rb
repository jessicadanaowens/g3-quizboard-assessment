require "rails_helper"

feature "User can view a quiz", :js => true do
  scenario "When user clicks on quiz button" do
    visit "/"
    expect(page).to have_content "Quizzes"
    click_on "State Capitols"
    expect(page).to have_content "Wyoming"
    expect(page).to have_content "Laramie"
    expect(page).to have_content "Cheyenne"
    expect(page).to have_content "Gillette"
    expect(page).to have_content "Casper"
  end
end

