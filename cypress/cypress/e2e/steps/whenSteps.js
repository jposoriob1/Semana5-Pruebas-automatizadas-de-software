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

    whenFillNameInvalid(){
        MemberPage.fillNameInputInvalid()
    }

    whenFillEmailInvalid(){
        MemberPage.fillEmailInputInvalid()
    }
    whenFillNote(){
        MemberPage.fillNoteTextArea()
    }
    whenFillNoteInvalid(){
        MemberPage.fillNoteTextAreaInvalid()
    }

}

export default new WhenSteps();