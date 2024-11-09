import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";

class WhenSteps {
    whenClicksNewMember(){
        MemberPage.clickNewMember();
    }
    
    whenFillNameMember(){
        MemberPage.fillNameInput()
    }
    
    whenFillEmailMember(){
        MemberPage.fillEmailInput()
    }
    whenClickSaveMember(){
        MemberPage.clickSave()
    }

    whenFillNameInvalidMemberForm(){
        MemberPage.fillNameInputInvalid()
    }

    whenFillEmailInvalidMemberForm(){
        MemberPage.fillEmailInputInvalid()
    }
    whenFillNoteMember(){
        MemberPage.fillNoteTextArea()
    }
    whenFillNoteInvalid(){
        MemberPage.fillNoteTextAreaInvalid()
    }

    whenClickMemberName(){
        MemberPage.clickNameMember();
    }
    whenUpdateMemberName(){
        MemberPage.updateName()
    }
    whenUpdateMemberEmail(){
        MemberPage.updateEmail()
    }
    whenUpdateMemberNote(){
        MemberPage.updateNote()
    }

}

export default new WhenSteps();