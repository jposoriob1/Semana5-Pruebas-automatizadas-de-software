Feature: Create page
  @user1 @web
  Scenario: E16 - Create page with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    When the user clicks on the 'New page' link
    And the user fills the title "<TITLE>"
    And the user fills the content "<CONTENT>"
    And the user clicks on the 'Publish' button
    And I wait for 2 seconds
    Then the user should see the created page title "<TITLE>"
    And I wait for 5 seconds
