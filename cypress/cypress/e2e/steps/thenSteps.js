import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";

class ThenSteps {
    thenSeeCreatedMember(){
        MemberPage.seeCreatedMember();
    }

}

export default new ThenSteps();