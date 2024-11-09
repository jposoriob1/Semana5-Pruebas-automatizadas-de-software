import {faker} from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";

describe('Edit Member', () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and the user enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Members
        GivenSteps.givenNavigateToMembersPage();
    })

    it("E13- ", () => {
        // Clicks on the members link
        dashboardPage.clickMembersLink();
        // Adds a member
        memberPage.addEmptyMember();
        // Asserts that the email field is required
        cy.contains('Please enter an email.');
    });

    it("E14 - Editar Miebro con datos Validos", () => {
        // Clicks on the members link
        dashboardPage.clickMembersLink();
        // Adds a member
        memberPage.addEmptyMember();
        // Asserts that the email field is required
        cy.contains('Please enter an email.');
    });
})