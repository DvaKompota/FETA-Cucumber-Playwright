Feature: As a user I can interact with checkboxes

    @smoke
    @regression
    Scenario: As a user I can interact and assert checkboxes
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        And the "blue checkbox" should be displayed
        And the "purple checkbox" should be displayed
        And the "green checkbox" should be displayed
        And the "grey checkbox" should be displayed
        And the "red checkbox" should be displayed
        And the "blue checkbox" should not be checked
        And the "purple checkbox" should not be checked
        And the "green checkbox" should not be checked
        And the "grey checkbox" should not be checked
        And the "red checkbox" should not be checked

        When I check the "blue checkbox"
        Then the "blue checkbox" should be checked
        And the "purple checkbox" should not be checked
        And the "green checkbox" should not be checked
        And the "grey checkbox" should not be checked
        And the "red checkbox" should not be checked

        When I check the "purple checkbox"
        Then the "blue checkbox" should be checked
        And the "purple checkbox" should be checked
        And the "green checkbox" should not be checked
        And the "grey checkbox" should not be checked
        And the "red checkbox" should not be checked

        When I check the "green checkbox"
        Then the "blue checkbox" should be checked
        And the "purple checkbox" should be checked
        And the "green checkbox" should be checked
        And the "grey checkbox" should not be checked
        And the "red checkbox" should not be checked

        When I check the "grey checkbox"
        Then the "blue checkbox" should be checked
        And the "purple checkbox" should be checked
        And the "green checkbox" should be checked
        And the "grey checkbox" should be checked
        And the "red checkbox" should not be checked

        When I check the "red checkbox"
        Then the "blue checkbox" should be checked
        And the "purple checkbox" should be checked
        And the "green checkbox" should be checked
        And the "grey checkbox" should be checked
        And the "red checkbox" should be checked

        When I uncheck the "blue checkbox"
        Then the "blue checkbox" should not be checked
        And the "purple checkbox" should be checked
        And the "green checkbox" should be checked
        And the "grey checkbox" should be checked
        And the "red checkbox" should be checked

        When I uncheck the "purple checkbox"
        Then the "blue checkbox" should not be checked
        And the "purple checkbox" should not be checked
        And the "green checkbox" should be checked
        And the "grey checkbox" should be checked
        And the "red checkbox" should be checked

        When I uncheck the "green checkbox"
        Then the "blue checkbox" should not be checked
        And the "purple checkbox" should not be checked
        And the "green checkbox" should not be checked
        And the "grey checkbox" should be checked
        And the "red checkbox" should be checked

        When I uncheck the "grey checkbox"
        Then the "blue checkbox" should not be checked
        And the "purple checkbox" should not be checked
        And the "green checkbox" should not be checked
        And the "grey checkbox" should not be checked
        And the "red checkbox" should be checked

        When I uncheck the "red checkbox"
        Then the "blue checkbox" should not be checked
        And the "purple checkbox" should not be checked
        And the "green checkbox" should not be checked
        And the "grey checkbox" should not be checked
        And the "red checkbox" should not be checked