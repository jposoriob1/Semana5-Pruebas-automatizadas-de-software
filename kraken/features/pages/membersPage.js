class MembersPage{
    constructor(driver){
        this.driver = driver;
    }

    async fillName(name){
        await this.driver.$('input[name="name"]').setValue(name);
    }
    async fillEmail(email){
        await this.driver.$('input[name="email"]').setValue(email);
    }
    async fillNote(note){
        await this.driver.$('textarea[name="note"]').setValue(note);
    }
}

module.exports = MembersPage;