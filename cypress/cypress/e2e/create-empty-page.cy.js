import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";

describe("Create Empty Page", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
    });

    it('E20 - should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();

        // When
        // Clicks on new page
        pagesPage.newPageBtn_Click();

        // Then
        // Publish intent page
        pagesPage.publishButton_ShouldNotExist()
    });
});
