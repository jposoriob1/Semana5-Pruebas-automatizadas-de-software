class DashboardPage{
    constructor(driver){
        this.driver = driver;
    }

    async navigateToMembers(){
        await this.driver.$('li>a[href="#/members/"]').click();
    }
}

module.exports = DashboardPage;