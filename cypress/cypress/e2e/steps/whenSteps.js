import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import tagPage from "../pages/tagPage";
import TagPage from "../pages/tagPage";
import postPage from "../pages/postPage";

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
//---------------------------post-----------------------------------------------------

    whenClicksNewPost(){
        postPage.clickNewPost()
    }

    // When the user clicks on the post title field to focus on it
    whenClicksPostTitle(){
        postPage.clickPostTitle()
    }

    // When the user inputs a title into the post title field
    whenInputPostTitle(){
        postPage.fillPostTitle()
    }

    // When the user clicks on the post content area to focus on it
    whenClicksPostContent(){
       postPage.clickPostContent()
    }

    // When the user inputs content into the post content field
    whenInputPostContent(){
        postPage.fillPostContent()
    }

    // When the user clicks the "Publish" button to initiate the publishing flow
    whenClickPublishPost(){
        postPage.clickPostPublish()
    }

    // When the user clicks "Continue" in the publishing flow
    whenClickContinuePublish(){
       postPage.clickContinuePublish()
    }

    // When the user clicks "Publish Right Now" to confirm the publication
    whenclickPostPublishRightNow(){
       postPage.clickPostPublishRightNow()
    }

    whenClickListPost(){
        postPage.clickListPost()
    }
    
    whenEditPostTitle(){
        postPage.editPostTitle()
    }

    whenEditPostContent(){
        postPage.editPostContent()
    }

    whenUpdatePost(){
        postPage.updatePost()
    }
    whenClickImagePostButton(){
        postPage.clickAddImagePostButton()
    }
    
    whenClickFirstImage(){
        postPage.addImageClick()
    }
}

export default new WhenSteps();