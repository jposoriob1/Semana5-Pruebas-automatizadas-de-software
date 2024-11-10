class DashboardPage {
    get membersLink(){
        return cy.get('li>a[href="#/members/"]');
    }

    get pagesLink(){
        return cy.get('li>a[href="#/pages/"]');
    }
    
    clickMembersLink(){
        cy.wait(2000);
        this.membersLink.click();
    }
}

export default new DashboardPage();
