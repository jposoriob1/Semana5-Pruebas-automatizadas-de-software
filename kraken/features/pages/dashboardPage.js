class DashboardPage{

    async navigateToMembers(ctx){
        await ctx.driver.$('li>a[href="#/members/"]').click();
    }

    async navigateToPages(ctx){
        await ctx.driver.$('li>a[href="#/pages/"]').click();
    }
}

module.exports = new DashboardPage();
