Feature: As a user I can interact with switches

    @smoke
    @regression
    Scenario: As a user I can interact and assert on switches
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "switch one" should be displayed
        And the "switch one" should be enabled
        And the "switch one" should be checked
        And the "mui switch one" should be mui-checked
        And the "mui switch two" should not be mui-checked
        And the "switch two" should be displayed
        And the "switch two" should not be enabled
        And the "switch two" should not be checked

        When I click the "switch one"
        And the "mui switch one" should not be mui-checked
        And the "mui switch two" should not be mui-checked
