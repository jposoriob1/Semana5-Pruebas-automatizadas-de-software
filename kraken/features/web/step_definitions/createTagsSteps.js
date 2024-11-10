const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const MembersPage = require('../../pages/membersPage');
const assert = require('assert');
const TagPage = require('../../pages/tagPage')


// Given

Given('the user navigates to the tags page', async function () {
    await DashboardPage.navigateToTags(this); 
});

// When

When("the user cliks on the new tag", async function () {
    await TagPage.navigateToNewTags(this);
})

When("I enter name tag {kraken-string}", async function (name) {
    await TagPage.fillNewTags(this, name);
})

When("I enter description tag {kraken-string}", async function (text) {
    await TagPage.fillDescriptionTags(this, text);
})

// Then

When("I click in save tag", async function () {
    await TagPage.saveTag(this);
})


When("I click again tags", async function () {
    await TagPage.clickInTags(this);
})