const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');

// Given
Given('the user navigates to the pages page', async function () {
    await DashboardPage.navigateToPages(this);
});

// When
When('the user clicks on the {string} link', async function (link) {
    await this.driver.$(`span=${link}`).click();
});

When('the user fills the title {kraken-string}', async function (title) {
    await PagesPage.fillTitle(this, title);
});

When('the user fills the content {kraken-string}', async function (content) {
    await PagesPage.fillContent(this, content);
});

When('the user clicks on the {string} button', async function (button) {
    await this.driver.$(`button=${button}`).click();
});

// Then
Then('the user should see the created page title {kraken-string}', async function (title) {
    const renderedTitle = await this.driver.$(`h1=${title}`).getText();
    return assert.equal(renderedTitle, title);
});
