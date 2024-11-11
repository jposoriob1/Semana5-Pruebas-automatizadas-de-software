import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import ThenSteps from "./steps/thenSteps";
import thenSteps from "./steps/thenSteps";

describe("Pages - Create Page With Only Description", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
    });

    it('E18 - Should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();

        // When
        // Clicks on new page
        // pagesPage.newPageBtn_Click();
        WhenSteps.WhenNewPageBtn_Click();

        // Fill in the page with random description
        // pagesPage.fillPageDescription(randomPageDescription)
        WhenSteps.WhenFillPageDescription(randomPageDescription);

        // Publish intent page
        // pagesPage.publishButton_Click();
        WhenSteps.WhenClickPublishButton();

        // Continue Final Review
        // pagesPage.finalReviewButton_Click();
        WhenSteps.WhenClickFinalReviewButton()

        // Publish page now
        // pagesPage.confirmPublishButton_Click();
        WhenSteps.WhenClickConfirmPublishButton();

        // Then
        // Verify the modal appears
        // pagesPage.isPublishFlowComplete();
        ThenSteps.thenIsPublishFlowComplete();

        // Verify the modal header text
        // pagesPage.isModalHeaderCorrect_Untitled();
        ThenSteps.thenIsModalHeaderCorrect_Untitled()

        // Verify the post title and excerpt
        // pagesPage.isModalDescriptionCorrect(randomPageDescription);
        ThenSteps.thenIsModalDescriptionCorrect(randomPageDescription);
    });
});
