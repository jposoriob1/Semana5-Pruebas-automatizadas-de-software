class TagPage{

    async navigateToNewTags(ctx){
        await ctx.driver.$('a[href="#/tags/new/"]').click();
    }

    async fillNewTags(ctx,name){
        await ctx.driver.$('.gh-input').setValue(name);
    }

    async fillDescriptionTags(ctx,text){
        await ctx.driver.$('#tag-description').setValue(text);
    }

    async saveTag(ctx){
        await ctx.driver.$('[data-test-button="save"]').click();
    }

    async clickInTags(ctx){
        await ctx.driver.$('a[href="#/tags/"]').click();
    }

}

module.exports = new TagPage();