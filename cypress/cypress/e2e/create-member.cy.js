import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";

describe("Create Members", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    // and navigates to the Members
    GivenSteps.givenNavigateToMembersPage();
  })
  
  it("E11- ", () => {
    // When the user clicks on New Member
    WhenSteps.whenClicksNewMember();
    // and fills the name
        
    // and fills the email
    //ThenSteps
    // and submits the form 
    
    
    
    /* Clicks on the members link
    dashboardPage.clickMembersLink();
    // Adds a member
    memberPage.addEmptyMember();
    // Asserts that the email field is required
    cy.contains('Please enter an email.');*/
  });

  it("E12- ", () => {
    // Visits the login page

    // Clicks on the members link
    dashboardPage.clickMembersLink();
    // Adds a member
    memberPage.addEmptyMember();
    // Asserts that the email field is required
    cy.contains('Please enter an email.');
  });

  it("E15- ", () => {
    // Visits the login page
    // Clicks on the members link
    dashboardPage.clickMembersLink();
    // Adds a member
    memberPage.addEmptyMember();
    // Asserts that the email field is required
    cy.contains('Please enter an email.');
  });
});