import userData from '../fixtures/userData.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {
   usernameField: "[name='username']",
   passwordField: "[name='password']",
   loginButton: "[type='submit']",
   sectionTitleTopBar: ".oxd-topbar-header-breadcrumb",
   dashboardGrid: ".orangehrm-dashboard-grid",
   wrongCredentialAlert: "[role='alert']",
   myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
   firstNameField: "[name='firstName']",
   lastNameField: "[name='lastName']",
   genericField: ".oxd-input",
   calendaryField: "[placeholder='yyyy-dd-mm']",
   closeButtonDate: ".--close",
   saveButton: "[type='submit']",
   saveMessage: ".oxd-toast-container--bottom",
   closeButtonSave: ".oxd-toast-close"
  
  }
    
  it.only('User info - Sucesse', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('LEONARDO')
    cy.get(selectorsList.lastNameField).clear().type('TESTER')
    cy.get(selectorsList.genericField).eq(4).clear().type("EmployeeId")
    cy.get(selectorsList.genericField).eq(5).clear().type("otherid")
    cy.get(selectorsList.genericField).eq(6).clear().type("777")
    cy.get(selectorsList.genericField).eq(9).clear().type("Test field")
    cy.get(selectorsList.calendaryField).eq(0).clear().type('2025-18-1')
    cy.get(selectorsList.closeButtonDate).click()
    cy.get(selectorsList.calendaryField).eq(1).clear().type('2021-18-1')
    cy.get(selectorsList.closeButtonDate).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    // cy.get(selectorsList.saveButton).eq(1).click() segundo botão de salvar
    cy.get(selectorsList.saveMessage)
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.closeButtonSave).click()
    
   


  })
    it('Login - Fail', () => {

      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
    })
  
 })

