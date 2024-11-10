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
    givenCreateNewMember(){
        MemberPage.clickNewMember()
        MemberPage.fillNameInput()
        MemberPage.fillEmailInput()
        MemberPage.fillNoteTextArea()
        MemberPage.clickSave();
        DashboardPage.clickMembersLink();
    }
    givenNavigateToTagPage(){
        DashboardPage.clickTagLink();
    }
}

export default new GivenSteps();