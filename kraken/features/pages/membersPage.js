class MembersPage{


    async fillName(ctx, name){
        await ctx.driver.$('input[name="name"]').setValue(name);
    }
    async fillEmail(ctx, email){
        await ctx.driver.$('input[name="email"]').setValue(email);
    }
    async fillNote(ctx, note){
        await ctx.driver.$('textarea[name="note"]').setValue(note);
    }
}

module.exports = new MembersPage();