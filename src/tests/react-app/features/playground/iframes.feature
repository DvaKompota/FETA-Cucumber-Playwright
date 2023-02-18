Feature: As a user I can interact with iFrames

    @smoke
    @regression
    Scenario: As a user I can interact and assert on iframes
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        And I fill the "search contacts" input in the "basic iframe" with the "Abraham Perry" text
        Then the "contact card" in the "basic iframe" should be displayed
        And the "name label" in the "basic iframe" should contain the text "Name:"
        And the "name" text in the "basic iframe" should be equal to "Abraham Perry"
        And the "gender label" in the "basic iframe" should contain the text "Gender:"
        And the "gender" text in the "basic iframe" should be equal to "Male"
        And the "address label" in the "basic iframe" should contain the text "Address:"
        And the "address" text in the "basic iframe" should be equal to "Ap #826-8849 Vulputate Street, Laramie"
        And the "edit button" in the "basic iframe" should be displayed
        And the "delete button" in the "basic iframe" should be displayed
