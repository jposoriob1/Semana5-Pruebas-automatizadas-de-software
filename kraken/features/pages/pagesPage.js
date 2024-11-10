class PagesPage {
    async fillTitle(context, title) {
        const titleField = await context.driver.$('textarea[placeholder="Page title"]');
        await titleField.setValue(title);
    }

    async fillContent(context, content) {
        const contentField = await context.driver.$('div[data-placeholder="Begin writing your page..."]');
        await contentField.setValue(content);
    }

    async addImage(context) {
        const addImageButton = await context.driver.$('button[aria-label="Add image"]');
        await addImageButton.click();
        const firstImage = await context.driver.$('img[alt="First image"]');
        await firstImage.click();
    }

    async updateTitle(context, newTitle) {
        const titleField = await context.driver.$('textarea[placeholder="Page title"]');
        await titleField.setValue(newTitle);
    }

    async updateContent(context, newContent) {
        const contentField = await context.driver.$('div[data-placeholder="Begin writing your page..."]');
        await contentField.setValue(newContent);
    }

}

module.exports = new PagesPage();
