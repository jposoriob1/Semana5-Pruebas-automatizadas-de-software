const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/loginPage');

// Given
Given('the user navigates to Ghost at {kraken-string}', async function (url) {
    await this.driver.url(url);
});

Given('the user logs in using the credentials {kraken-string} and {kraken-string}', async function (username, password) {
    await LoginPage.enterUserName(this, username);
    await LoginPage.enterPassword(this, password);
    await LoginPage.clickOnSubmit(this);
});