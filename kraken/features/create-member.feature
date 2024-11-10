Feature: Create member
  @user1 @web
  Scenario: Create member with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the members page
    When the user clicks on the 'New member' link
    And the user fill the name "<NAME>" 
    And the user fill the email "<EMAIL>" 
    And the user fill the note "<NOTE>"
    And the user clicks on the 'Save' button
    And I wait for 6 seconds

