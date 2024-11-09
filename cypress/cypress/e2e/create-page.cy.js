import GivenSteps from "./steps/givenSteps";
import loginPage from "./pages/loginPage";
import dashboardPage from "./pages/dashboardPage";
import memberPage from "./pages/memberPage";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";

describe("Create Pages", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
    });

    // it("E11- ", () => {
    //     // Visits the dashboard page
    //     cy.url().should('include', '/ghost/#/dashboard');
    //     // Clicks on the members link
    //     dashboardPage.clickMembersLink();
    //     // Adds a member
    //     memberPage.addEmptyMember();
    //     // Asserts that the email field is required
    //     cy.contains('Please enter an email.');
    // });

    it('should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();
        // cy.visit('http://localhost:3001/ghost/#/pages');

        // When
        // Clicks on new page
        pagesPage.newPageBtn_Click();

        // Fill in the page with random description
        pagesPage.fillPageDescription(randomPageDescription)

        // Publish intent page
        pagesPage.publishButton_Click();

        // Continue Final Review
        pagesPage.finalReviewButton_Click();

        // Publish page now
        pagesPage.confirmPublishButton_Click();

        // Then
        // Verify the modal appears
        pagesPage.isPublishFlowComplete();

        // Verify the modal header text
        pagesPage.isModalHeaderCorrect_Untitled();

        // Verify the post title and excerpt
        pagesPage.isModalDescriptionCorrect(randomPageDescription);
    });
});
