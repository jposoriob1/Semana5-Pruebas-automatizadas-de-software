import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";

describe("Create Members", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    // and navigates to the Members
    GivenSteps.givenNavigateToMembersPage();
  });
  
  it("E11- ", () => {
    // Visits the login page
    cy.visit('http://localhost:3001/ghost/#/signin');
    // Logins into the app
    loginPage.login('c.bayona@uniandes.edu.co', 'miau1234567890');
    // Visits the dashboard page
    cy.url().should('include', '/ghost/#/dashboard');
    // Clicks on the members link
    dashboardPage.clickMembersLink();
    // Adds a member
    memberPage.addEmptyMember();
    // Asserts that the email field is required
    cy.contains('Please enter an email.');
  });

  it("E12- ", () => {
    // Visits the login page
    cy.visit('http://localhost:3001/ghost/#/signin');
    // Logins into the app
    loginPage.login('c.bayona@uniandes.edu.co', 'miau1234567890');
    // Visits the dashboard page
    cy.url().should('include', '/ghost/#/dashboard');
    // Clicks on the members link
    dashboardPage.clickMembersLink();
    // Adds a member
    memberPage.addEmptyMember();
    // Asserts that the email field is required
    cy.contains('Please enter an email.');
  });

  it("E15- ", () => {
    // Visits the login page
    cy.visit('http://localhost:3001/ghost/#/signin');
    // Logins into the app
    loginPage.login('c.bayona@uniandes.edu.co', 'miau1234567890');
    // Visits the dashboard page
    cy.url().should('include', '/ghost/#/dashboard');
    // Clicks on the members link
    dashboardPage.clickMembersLink();
    // Adds a member
    memberPage.addEmptyMember();
    // Asserts that the email field is required
    cy.contains('Please enter an email.');
  });
});
