import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";

class WhenSteps {
    whenClicksNewMember(){
        MemberPage.clickNewMember();
    }

}

export default new WhenSteps();