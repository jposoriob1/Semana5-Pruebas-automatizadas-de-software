class PagesPage {
    get newPageBtn() {
        return cy.get('[data-test-new-page-button]');
    }

    get publishBtn() {
        // return cy.get('');
        return cy.contains('button', 'Publish')
    }

    get confirmPublishBtn() {
        return cy.get('[data-test-button="confirm-publish"]');
    }

    get finalReviewBtn() {
        return cy.get('[data-test-button="continue"]');
    }

    get pageDescription() {
        return cy.get('div.kg-prose').first();
    }

    fillPageDescription(description) {
        cy.wait(1000);
        this.pageDescription.type(description);
    }

    newPageBtn_Click() {
        this.newPageBtn.click();
    }

    publishButton_Click() {
        this.publishBtn.click();
    }

    finalReviewButton_Click() {
        this.finalReviewBtn.click();
    }

    confirmPublishButton_Click() {
        this.confirmPublishBtn.click();
    }

    isPublishFlowComplete() {
        return cy.get('[data-test-publish-flow="complete"]').should('be.visible');
    }

    isModalHeaderCorrect_Untitled() {
        return cy.get('[data-test-complete-bookmark=""] .modal-body h2').should('contain', '(Untitled)');
    }

    isModalDescriptionCorrect(description) {
        return cy.get('[data-test-complete-bookmark=""] .modal-body .post-excerpt').should('contain', description);
    }

    navigateToPagesPage() {
        const url = Cypress.env("url");
        cy.visit(url+'/ghost/#/pages');
    }
}

export default new PagesPage();
