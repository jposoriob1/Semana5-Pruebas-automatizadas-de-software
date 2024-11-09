class PagesPage {
    get newPageBtn() {
        return cy.get('[data-test-new-page-button]');
    }

    get publishButton() {
        return cy.get('[data-test-button="publish-flow"]');
    }

    get confirmPublishButton() {
        return cy.get('[data-test-button="confirm-publish"]');
    }

    get finalReviewButton() {
        return cy.get('[data-test-button="continue"]');
    }

    get pageDescription() {
        return cy.get('div.kg-prose[contenteditable="true"]');
    }

    fillPageDescription(description) {
        cy.wait(1000);
        this.pageDescription.type(description);
    }

    newPageBtnClick_Click() {
        this.newPageBtn.click();
    }

    publishButton_Click() {
        this.publishButton.click();
    }

    finalReviewButton_Click() {
        this.finalReviewButton.click();
    }

    confirmPublishButton_Click() {
        this.confirmPublishButton.click();
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
