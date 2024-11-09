class DashboardPage {
    get membersLink(){
        return cy.get('li>a[href="#/members/"]');
    }
    
    clickMembersLink(){
        cy.wait(2000);
        this.membersLink.click();
    }

    get postLink(){
        return cy.get('li>a[href="#/posts/"]');
    }
    
    clickMembersLink(){
        cy.wait(1000);
        this.postLink.click();
    }


}

export default new DashboardPage();