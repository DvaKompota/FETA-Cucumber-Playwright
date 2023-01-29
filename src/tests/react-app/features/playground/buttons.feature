Feature: As a user I can interact with buttons

    @smoke
    @regression
    Scenario: As a user I can interact and assert on unique buttons
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        When I click the "primary button"
        And I click the "third button"
        Then the "primary button" should be enabled
        And the "primary button" text should be equal to "Primary"
        And the "secondary button" should not be enabled
        And the "secondary button" text should be equal to "Disabled"
        And the "third button" should be enabled
        And the "third button" text should be equal to "Link"

    @smoke
    @regression
    Scenario: As a user I can interact and assert on identical buttons
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        When I click the 1st "index button"
        And I click the 2nd "index button"
        And I click the 3rd "index button"
        Then the 1st "index button" text should be equal to "One"
        Then the 2nd "index button" text should be equal to "Two"
        Then the 3rd "index button" text should be equal to "Three"
