const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');



// When


When('the user fills the title {kraken-string}', async function (title) {
    await PagesPage.fillTitle(this, title);
});




// Then
Then('the user should see the created page title {kraken-string}', async function (title) {
    const renderedTitle = await this.driver.$(`h1=${title}`).getText();
    return assert.equal(renderedTitle, title);
});
