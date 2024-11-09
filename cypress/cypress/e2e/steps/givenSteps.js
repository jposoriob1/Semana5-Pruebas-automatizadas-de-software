import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import DashboardPage from "../pages/dashboardPage";

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
}

export default new GivenSteps();