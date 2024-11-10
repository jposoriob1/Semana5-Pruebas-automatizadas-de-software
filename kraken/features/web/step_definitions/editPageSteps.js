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

When('the user updates the title to {kraken-string}', async function (newTitle) {
    await PagesPage.updateTitle(this, newTitle);
});

When('the user updates the content to {kraken-string}', async function (newContent) {
    await PagesPage.updateContent(this, newContent);
});

When('the user clicks on the {string} button', async function (button) {
    await this.driver.$(`button=${button}`).click();
});

// Then
Then('the user should see the updated page title {kraken-string}', async function (newTitle) {
    const renderedTitle = await this.driver.$(`h1=${newTitle}`).getText();
    return assert.equal(renderedTitle, newTitle);
});

Then('the user should see the updated page content {kraken-string}', async function (newContent) {
    const renderedContent = await this.driver.$(`div=${newContent}`).getText();
    return assert.equal(renderedContent, newContent);
});
