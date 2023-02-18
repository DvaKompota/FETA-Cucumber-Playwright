Feature: As a user I can interact with tables

    @smoke
    @regression
    Scenario: As a user I can interact and assert on tables
        Given I am on the "home" page
        When I click the "playground" button
        Then I am directed to the "playground" page
        And the "playground header" should be displayed
        And the "basic table" should be equal to the following:
            | 159 | 6   | 24 | 4   |
            | 237 | 9   | 37 | 4.3 |
            | 262 | 16  | 24 | 6   |
            | 305 | 3.7 | 67 | 4.3 |
            | 356 | 16  | 49 | 3.9 |
        And the "basic table" should not be equal to the following:
            | 159 | 6   | 24 | 4   |
            | 237 | 9   | 37 | 4.3 |
            | 262 | 16  | 24 | 6   |
            | 305 | 3.4 | 67 | 4.3 |
            | 356 | 16  | 49 | 3.9 |
        And the "basic table" should be equal to the "basic-table.csv" file
