import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menupage'
import InfoTestPage from '../pages/infoTestPage'   

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const infoPage = new InfoTestPage()   

describe('Orange HRM Tests', () => {

  it('User Info - Sucesso)', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboard()         // checagem de dashboard
    menuPage.infoCheck()                  // abre a tela My Info
    infoPage.EmployeeFullName('Leonardo', 'second', 'seven')          // preenche nome completo
    infoPage.personalDetails()          // preenche os outros campos

    
  })

  it.skip('Login - Fail', () => {
    
  })
})









