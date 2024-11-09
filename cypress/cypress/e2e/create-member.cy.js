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
  
  it("E11- Create member with valid values", () => {
    // When the user clicks on New Member
    WhenSteps.whenClicksNewMember();
    // and fills the name input
    WhenSteps.whenFillName();
    // and fills the email input
    WhenSteps.whenFillEmail();
    // and fills the note TextArea
    WhenSteps.whenFillNote()
    // and submits the form 
    WhenSteps.whenSubmitNewMember()
    // Then the user should see the member created
    ThenSteps.thenSeeCreatedMember()
  });

  /*it("E12- ", () => {
  });

  it("E15- ", () => {
  });*/
});