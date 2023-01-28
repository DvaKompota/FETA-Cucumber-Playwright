Feature: As a user I can interact with tabs

    @smoke
    @regression
    Scenario: As a user I can interact and assert on new tabs
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        When I click the "new tab" link
        Then the "1st" tab should contain the title "Playground"
        And the "2nd" tab should contain the title "Contacts"
        When I fill the "search contacts" input on the "2nd" tab with the "invalid" text
        Then the "contact card" on the "2nd" tab should not be displayed
        When I fill the "search contacts" input on the "2nd" tab with the "Abraham Perry" text
        Then the "contact card" on the "2nd" tab should be displayed
        And the "name label" on the "2nd" tab should contain the text "Name:"
        And the "name" text on the "2nd" tab should be equal to "Abraham Perry"
        And the "gender label" on the "2nd" tab should contain the text "Gender:"
        And the "gender" text on the "2nd" tab should be equal to "Male"
        And the "address label" on the "2nd" tab should contain the text "Address:"
        And the "address" text on the "2nd" tab should be equal to "Ap #826-8849 Vulputate Street, Laramie"
        And the "edit button" on the "2nd" tab should be displayed
        And the "delete button" on the "2nd" tab should be displayed
