class DashboardPage {
    get membersLink(){
        return cy.get('li>a[href="#/members/"]');
    }
    
    clickMembersLink(){
        cy.wait(2000);
        this.membersLink.click();
    }

    get tagLink(){
        return cy.get('li>a[href="#/tags/"]').click();
    }

    clickTagLink(){
        cy.wait(2000);
        this.tagLink.click();
    }
}

export default new DashboardPage();