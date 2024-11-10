const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');

// Given

// When



// Then
Then('the user should see the created page description {kraken-string}', async function (content) {
    const renderedContent = await this.driver.$(`div=${content}`).getText();
    return assert.equal(renderedContent, content);
});
