const { Given, When } = require('@cucumber/cucumber');
const LoginPage = require ('../../pages/loginPage');
const DashboardPage = require ('../../pages/dashboardPage');


Given('the user navigates to Ghost', async function () {
  await this.driver.url('http://localhost:3001/ghost/#/signin');
});

Given('the user logs in', async function () {
  const loginPage = new LoginPage(this.driver);
  await loginPage.enterUserName('c.bayona@uniandes.edu.co');
  await loginPage.enterPassword('miau123456789');
  await loginPage.clickOnSubmit();
});

Given('the user navigates to the members page', async function () {
  const dashboardPage = new DashboardPage(this.driver);
  await dashboardPage.navigateToMembers();
});