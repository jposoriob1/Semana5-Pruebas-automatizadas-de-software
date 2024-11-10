const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const MembersPage = require('../../pages/membersPage');
// Given

Given('the user navigates to the members page', async function () {
    await DashboardPage.navigateToMembers(this);
});

// When

When('the user clicks on the {string} link', async function (link) {
    await this.driver.$(`span=${link}`).click();
});


When('the user fill the name {kraken-string}', async function (name) {
    await MembersPage.fillName(this,name);
});

When('the user fill the email {kraken-string}', async function (email) {
    await MembersPage.fillEmail(this,email);
});

When('the user fill the note {kraken-string}', async function (note) {
    await MembersPage.fillNote(this,note);
});
When('the user clicks on the {string} button', async function (button) {
    await this.driver.$(`button=${button}`).click();
});

Then('the user should see the created member ', async function (message) {
    await this.driver.$(`p=${message}`).waitForExist();
});