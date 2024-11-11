import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/postPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";
import whenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";



describe("edit - post", () => {

    beforeEach(() => {
      // Given the User navigates to the login page
      GivenSteps.givenNavigateToLoginPage();
      // and enters a valid username and password and click the login button
      GivenSteps.givenLogin();
      // and navigates to the Posts
      GivenSteps.givenNavigateToPostsPage();

      GivenSteps.givenCreatePost();

    })
    
    it("E2- Edit Post ", () => {
     
      whenSteps.whenClickListPost();
      whenSteps.whenClicksPostTitle();
      whenSteps.whenEditPostTitle();
      whenSteps.whenClicksPostContent();
      WhenSteps.whenEditPostContent();
      whenSteps.whenUpdatePost();
      thenSteps.thenVerifyEditPost();
      
  });

  

  });