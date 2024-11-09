class DashboardPage {
    get membersLink(){
        return cy.get('li>a[href="#/members/"]');
    }
    
    clickMembersLink(){
        cy.wait(1000);
        this.membersLink.click();
    }
}

export default new DashboardPage();