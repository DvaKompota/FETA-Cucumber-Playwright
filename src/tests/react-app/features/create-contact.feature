Feature: As a user I expect to be able to create contacts

    @smoke
    @regression
    Scenario: As a user I expect to be able to create a new contact
        Given I am on the "home" page
        And I click the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should contain the text "Create Contact"

        Given I fill the "name" input with the "Carl Proctor" text
        And I select the "Male" option from the "gender" menu
        And I fill the "phone" input with the "555-555-5555" text
        And I fill the "street" input with the "621 Cowan Ave" text
        And I fill the "city" input with the "Los Angeles" text
        When I click the "save" button
        Then I am directed to the "home" page

        When I fill the "search contacts" input with the "Carl Proctor" text
        Then the "contact card" should be displayed
        And the "name label" should contain the text "Name:"
        And the "name" should contain the text "Carl Proctor"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should contain the text "Male"
        And the "address label" should contain the text "Address:"
        And the "address" should contain the text "621 Cowan Ave, Los Angeles"
        And the "edit button" should be displayed
        And the "delete button" should be displayed
