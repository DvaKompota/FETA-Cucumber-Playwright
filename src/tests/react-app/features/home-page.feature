Feature: As a user I expect to be able to navigate to the home page

    @smoke
    @regression
    Scenario: As a user I expect to be able to see contacts
        Given I am on the "home" page
        Then the "header logo" should be displayed
        Then the "contacts header" should contain the text "Contacts"

    @smoke
    @regression
    Scenario: As a user I expect to see no contacts for invalid input
        Given I am on the "home" page
        Then the "contact card" should be displayed
        When I fill the "search contacts" input with the "invalid" text
        Then the "contact card" should not be displayed
