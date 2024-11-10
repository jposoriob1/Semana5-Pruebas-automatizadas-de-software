import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";

describe("Create Page without img", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
    });

    it('E19 - should create a new page successfully with a random title and description', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        // When
        // Clicks on new page
        pagesPage.newPageBtn_Click();

        // Fill in the page with a randon title
        pagesPage.fillPageHeader(randomPageTitle);

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
        pagesPage.isModalHeaderCorrect(randomPageTitle);

        // Verify the post title and excerpt
        pagesPage.isModalDescriptionCorrect(randomPageDescription);
    });
});
