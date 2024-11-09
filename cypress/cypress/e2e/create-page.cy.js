import GivenSteps from "./steps/givenSteps";
import loginPage from "./pages/loginPage";
import dashboardPage from "./pages/dashboardPage";
import memberPage from "./pages/memberPage";
import pagesPage from "./pages/pagesPage";

describe("Create Pages", () => {

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

    it('should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();

        // Given
        pagesPage.navigateToPagesPage();
        // cy.visit('http://localhost:3001/ghost/#/pages');

        // When
        // Clicks on new page
        cy.get('[data-test-new-page-button]').click();
        // Fill in the page with random description
        cy.get('div.kg-prose[contenteditable="true"]').type(randomPageDescription);
        // Publish intent page
        cy.get('[data-test-button="publish-flow"]').click();
        // Continue Final Review
        cy.get('[data-test-button="continue"]').click();
        // Publish page now
        cy.get('[data-test-button="confirm-publish"]').click();

        // Then
        // Verify the modal appears
        cy.get('[data-test-publish-flow="complete"]').should('be.visible');
        // Verify the modal header text
        cy.get('[data-test-publish-flow="complete"] .modal-header h1').should('contain', "Boom! It's out there.")
            .and('contain', 'Your page is published.');
        // Verify the post title and excerpt
        cy.get('[data-test-complete-bookmark=""] .modal-body h2').should('contain', '(Untitled)');
        cy.get('[data-test-complete-bookmark=""] .modal-body .post-excerpt').should('contain', randomPageDescription);
    });
});
