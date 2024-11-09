import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";

class WhenSteps {
    whenClicksNewMember(){
        MemberPage.clickNewMember();
    }
    
    whenFillName(){
        MemberPage.fillNameInput()
    }
    
    whenFillEmail(){
        MemberPage.fillEmailInput()
    }
    whenSubmitNewMember(){
        MemberPage.submitNewMember()
    }

}

export default new WhenSteps();