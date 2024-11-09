import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import DashboardPage from "../pages/dashboardPage";
import PagesPage from "../pages/pagesPage";

class GivenSteps {
    givenNavigateToLoginPage(){
        LoginPage.navigateToLogin();
    }
    
    givenNavigateToMembersPage(){
        DashboardPage.clickMembersLink();
    }

    givenLogin() {
        LoginPage.login()
    }

    giveNavigateToPagesPage(){
        DashboardPage.clickPagesLink();
    }
}

export default new GivenSteps();
