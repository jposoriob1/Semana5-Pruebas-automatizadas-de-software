class PostPage {
    get newPostButton() {
        return cy.get('[data-test-new-post-button]');
    }

    get postTitleInput() {
        return cy.get('textarea.gh-editor-title');
    }

    get postContent() {
        return cy.get('div.kg-prose p');
    }

    get postPublish() {
        return cy.get('[data-test-button="publish-flow"]');
    }

}
export default new PostPage();