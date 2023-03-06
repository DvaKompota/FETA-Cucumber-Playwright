Feature: As a user I can interact with alerts

    @smoke
    @regression
    Scenario: As a user I can interact and assert on alerts
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        When I click the "alert button"
        Then I click "accept" on the alert dialog
        When I click the "alert button"
        Then I click "dismiss" on the alert dialog
