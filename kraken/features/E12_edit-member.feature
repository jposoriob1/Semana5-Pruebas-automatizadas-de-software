Feature: Edit Member
  @user1 @web
  Scenario: E13 - Create member with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the members page
    And I wait for 5 seconds