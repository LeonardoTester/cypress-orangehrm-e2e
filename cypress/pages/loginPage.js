class LoginPage {

    selectorsList() {
     const selectors = {
       
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']",
        
        }
        
        
            return selectors


        }
      
        acessLoginPage() {

         cy.visit('/auth/login')

        }

        loginWithUser(usarname, password) {

            cy.get(this.selectorsList().usernameField).type(usarname)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().loginButton).click()

        }

        AlertErrorLogin() {


            cy.get(this.selectorsList().wrongCredentialAlert)

        }
    }

    export default LoginPage
