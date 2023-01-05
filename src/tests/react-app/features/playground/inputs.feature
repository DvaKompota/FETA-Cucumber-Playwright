Feature: As a user I can interact with autocomplete inputs

    @smoke
    @regression
    Scenario: As a user I can interact and assert on autocomplete inputs
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        When I fill the "movies" input with the "The G" text
        And I click the "movies list item" with text equal to "The Godfather"
        Then the "movies" input value should be equal to "The Godfather"
        Then the "movies" input value should not be equal to "The Godfather: Part II"
