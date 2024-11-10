class DashboardPage{

    async navigateToMembers(ctx){
        await ctx.driver.$('li>a[href="#/members/"]').click();
    }
}

module.exports = new DashboardPage();