import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import tagPage from "../pages/tagPage";
import TagPage from "../pages/tagPage";

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
    whenClickTagNewTag(){
        tagPage.clickNewTag()
    }

    whenFillNameTag(){
        tagPage.fillNameTag()
    }

    whenFillDescriptionTag(){
        tagPage.fillDescriptionTag()
    }

    whenSaveTag(){
        tagPage.saveTag()
    }

    whenFillInvalidNameTag(){
        tagPage.fillInvalidNameTag()
    }

    whenFillInvalidDescription(){
        tagPage.fillInvalidDescriptionTag()
    }

    whenfillNameTagDelete(){
        tagPage.fillNameTagDelete()
    }
    
    whenSelectTagToDelete(){
        tagPage.tagToDelete()
    }
    whenDeleteTagButton(){
        tagPage.deleteTag()
    }
    whenConfirmDelte(){
        tagPage.deleteConfirmClick()
    }

    whenEditTagName(){
        tagPage.fillEditNameTag()
    }
    whenEditTagDescription(){
        tagPage.fillEditDescriptionTag()
    }
}

export default new WhenSteps();