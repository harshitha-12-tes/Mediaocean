import{expect, test} from "@playwright/test"
import LoginPage from "../POM/login"
import loginpage from "../DDt/loginpage.json"
import Dashboardpage from "../POM/dashboard"

test("smoke",async({page})=>{
    //login page
    let lp=new LoginPage(page)
    await lp.navigate(loginpage.url)
    await lp.login(loginpage.username,loginpage.password)
    let text=await page.locator('//img[@alt="client brand banner"]')
    await expect(page).toHaveTitle("OrangeHRM")

    //for dashboard
    let db=new Dashboardpage(page)
    await db.dashboard()
    await expect.soft(page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[1]')). toBeVisible()
    await expect.soft(page.locator('//a[text()="Apply"]')).toBeVisible()
    await expect.soft(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]')).toBeVisible()
})