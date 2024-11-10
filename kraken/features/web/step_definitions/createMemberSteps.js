const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const MembersPage = require('../../pages/membersPage');
const assert = require('assert');

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

When('the user clicks on a member name {kraken-string}', async function (name) {
    await MembersPage.clickOnMemberName(this,name);
})

// Then

Then('the user should see the created member name {kraken-string}', async function (name) {
   const renderedName = await this.driver.$(`h3=${name}`).getText();
   return assert.equal(renderedName, name);
});

Then('the user should see the created member email {kraken-string}', async function (name) {
    const renderedEmail = await this.driver.$(`a=${name}`).getText();
    return assert.equal(renderedEmail, name);
 });
 

Then('the user should see the message {string}', async function (emailError) {
    const renderedEmail = await this.driver.$(`p.response=${emailError}`).getText();
    return assert.equal(renderedEmail, emailError);
});
