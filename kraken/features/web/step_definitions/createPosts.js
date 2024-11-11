const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const postPage = require('../../pages/postPage');
const assert = require('assert');

// Given

Given('the user navigates to the post page', async function () {
    await DashboardPage.navigateToPosts(this);
});

// // When

When("the user cliks on the new post", async function () {
    await postPage.navigateNewPosts(this);
});

When("the user cliks on the new post title", async function () {
    await postPage.ClickPostsTitle(this);
});

When("The user enters a title for the post", async function () {
    await postPage.fillPostTitle(this);
});

When("the user cliks on the new post content", async function () {
    await postPage.ClickPostsContent(this);
});

When("the user enters a content for the post", async function () {
    await postPage.fillPostContent(this);
});

When("The user clicks on the publish post button", async function () {
    await postPage.ClickPostsBtnPublish(this);
});

When("The user clicks on the button continue publishing", async function () {
    await postPage.ClickPostsBtnContinuePublish(this);
});

When("User clicks on the publish now button", async function () {
    await postPage.ClickPostPublishRightNow(this);
});

When('the user clicks on the first post', async function () {
    await postPage.ClickSelectPost(this);
});

When('the user updates the post', async function () {
    await postPage.ClickUpdatePost(this);
});

When('the user clicks add image', async function () {
    await postPage.addImagePostButton(this);
});

When('the user clicks on the first image', async function () {
    await postPage.ClickFirstImage(this);
});


//Then

Then('Successful publication confirmation appears', async function () {
    const isVisible = await postPage.isConfirmationModalVisible(this);
    assert.equal(isVisible, true, "The confirmation modal did not appear.");
});


Then('the confirmation message should appear', async function () {
    const isMessageVisible = await postPage.isConfirmationMessageVisible(this);
    assert.equal(isMessageVisible, true, "The confirmation message did not appear.")
});

Then('the confirmation update post', async function () {
    const isVisible = await postPage.isNotificationVisible(this);
    assert.equal(isVisible, true, "The confirmation did not appear.");
});

Then('the confirmation message untitled', async function () {
    const isMessageVisible = await postPage.isConfirmationTitle(this);
    assert.equal(isMessageVisible, true, "The confirmation message did not appear.")
});

Then('the button should not be visible', async function () {
    await postPage.isButtonNotVisible(this).then(isNotVisible => {
        assert.equal(isNotVisible, true, "The button is visible, but it should not be.");
    });
});

