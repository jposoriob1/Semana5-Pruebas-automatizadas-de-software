const { When } = require('@cucumber/cucumber');
const MembersPage = require ('../../pages/membersPage');
When('the user clicks on the {string} link', async function (link) {
  await this.driver.$(`span=${link}`).click();
});


When('the user fill {string} name', async function (name) {
  const membersPage = new MembersPage(this.driver);
  await membersPage.fillName(name);
});