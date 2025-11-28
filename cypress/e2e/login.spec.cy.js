import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
   

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
  

describe('Orange HRM Tests', () => {

  it('User Info - Sucesso)', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboard()         // checagem de dashboard   
    
  })

  it('Login - Fail', () => {


    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.AlertErrorLogin()
    
  })
})









