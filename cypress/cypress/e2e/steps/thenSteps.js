import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import tagPage from "../pages/tagPage";

class ThenSteps {
    thenSeeCreatedMember(){
        MemberPage.seeCreatedMember();
    }
    thenSeeEmailRequiredMemberForm(){
        MemberPage.seeEmailRequired();
    }
    thenSeeInvalidEmailNote(){
        MemberPage.seeInvalidEmailNote();
    }
    thenSeeUpdatedMember(){
        MemberPage.seeUpdatedMember();
    }
    thenSeeTagPage(){
        tagPage.seeTags();
    }

}

export default new ThenSteps();