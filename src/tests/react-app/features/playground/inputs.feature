Feature: As a user I can interact with autocomplete inputs

    @smoke
    @regression
    Scenario: As a user I can interact and assert on autocomplete inputs
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        When I fill the "movies" input with the "The G" text
        When I click the "movies list item" containing the "The Godfather" text
        Then the "movies" input should contain the value "The Godfather"
        Then the "movies" input should not contain the value "The Godfather: Part II"
                