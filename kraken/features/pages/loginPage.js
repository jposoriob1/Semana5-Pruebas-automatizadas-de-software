class LoginPage{
    constructor(driver){
        this.driver = driver;
    }

    async enterUserName(username){
        await this.driver.$('input[name="identification"]').setValue(username);
    }
    async enterPassword(password){
        await this.driver.$('input[name="password"]').setValue(password);
    }
    async clickOnSubmit(){
        await this.driver.$('button[type="submit"]').click();
    }
}

module.exports = LoginPage;