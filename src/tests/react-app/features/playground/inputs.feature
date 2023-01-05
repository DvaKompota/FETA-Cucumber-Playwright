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

    @smoke
    @regression
    Scenario: As a user I can interact and assert on inputs
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "outlined required" input value should be equal to "Testing"
        And the "outlined required" input should be enabled
        And the "outlined disabled" input value should be equal to "Talks"
        And the "outlined disabled" input should not be enabled
        And the "outlined read-only" input value should be equal to "Hub"
        And the "outlined read-only" input should be enabled
        When I fill the "outlined required" input with the "Hello World" text
        Then the "outlined required" input value should be equal to "Hello World"

    @smoke
    @regression
    Scenario: As a user I can interact and assert on input validation
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "outlined error label" text should be equal to "Error"
        And the "outlined error text" text should be equal to "Incorrect entry."
