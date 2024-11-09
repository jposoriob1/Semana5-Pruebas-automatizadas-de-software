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
    whenFillNote(){
        MemberPage.fillNoteTextArea()
    }
    

}

export default new WhenSteps();