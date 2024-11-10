Feature: Create member
  @user1 @web
  Scenario: Create member with valid values
    Given the user navigates to Ghost 
    And the user logs in
    And the user navigates to the members page
    When the user clicks on the 'New member' link
    And the user fill 'juan' name
    And I wait for 6 seconds

