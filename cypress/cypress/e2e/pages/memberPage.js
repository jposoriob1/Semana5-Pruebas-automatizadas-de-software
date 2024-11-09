import {faker, th} from "@faker-js/faker";

class MemberPage {
    
    displayName = faker.internet.displayName()
    email = faker.internet.email();
    note = faker.string.alpha(100)
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
        return cy.get('button>span').contains('Save');
    }
    
    get memberNoteTextArea(){
        return cy.get('textarea[name="note"]');
    }

    clickNewMember() {
        cy.wait(1000);
        this.newMemberButton.click();
    }
    
    fillNameInput() {
        this.memberNameInput.clear().type(this.displayName);
    }
    
    fillEmailInput() {
        this.memberEmailInput.clear().type(this.email);
    }
    
    fillNoteTextArea() {
        this.memberNoteTextArea.clear().type(this.note);
    }
    
    seeCreatedMember(){
        cy.get('p').contains('Created').should('exist')
        cy.get('h3').contains(this.displayName).should('exist')
        cy.get('a').contains(this.email).should('exist')
    }
    
    submitNewMember() {
        this.saveButton.click();
    }
}

export default new MemberPage();
