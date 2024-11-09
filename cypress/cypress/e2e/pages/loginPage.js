class LoginPage{
    get usernameInput(){
        return cy.get('input[name="identification"]');
    }
    get passwordInput(){
        return cy.get('input[name="password"]');
    }
    get loginButton(){
        return cy.get('button[type="submit"]');
    }

    enterUsername(username){
        this.usernameInput.clear().type(username);
    }

    enterPassword(password){
        this.passwordInput.clear().type(password);
    }
    
    clickLogin(){
        this.loginButton.click();
    }

    login(){
        const username = Cypress.env("username");
        const password = Cypress.env("password");
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
    
    navigateToLogin(){
        cy.visit('http://localhost:3001/ghost/#/signin');
    }
}

export default new LoginPage();