class MemberPage {

    get newMemberButton() {
        return cy.get('div.view-actions-top-row>a[href="#/members/new/"]');
    }

    get memberNameInput() {
        return cy.get('input[name="name"]');
    }

    get memberEmailInput() {
        return cy.get('input[name="email"]');
    }

    get saveButton() {
        return cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    }

    addMember(name, email) {
        cy.wait(1000);
        this.newMemberButton.click();
        this.memberNameInput.clear().type(name);
        this.memberEmailInput.clear().type(email);
        //this.saveButton.click();
    }

    addEmptyMember() {
        cy.wait(1000);
        this.newMemberButton.click();
        this.saveButton.click();
    }
}

export default new MemberPage();
