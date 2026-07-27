class Dashboardpage{
     /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
        this.page = page;
        this.profile = page.locator(".oxd-userdropdown-tab")
        this.pim = page.locator("//span[text()='PIM']")
        this.leave=page.locator('//span[text()="Leave"]')
        this.time=page.locator('//span[text()="Time"]')
        this.info=page.locator('//span[text()="My Info"]')
        this.performance=page.locator('//span[text()="Performance"]')
        this.dash=page.locator('//span[text()="Dashboard"]')
        this.directory=page.locator('//span[text()="Directory"]')
        this.claim=page.locator('//span[text()="Claim"]')
        this.buzz=page.locator('//a[@class="oxd-main-menu-item"]')
        this.profile = page.locator(".oxd-userdropdown-tab")
        this.logout = page.locator('//a[text()="Logout"]')
    }
    async dashboard() {
        await this.profile.click()

        await this.pim.click()
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

        await this.leave.click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList")

        await this.time.click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet")

        //await this.recruitment.click()

        await this.info.click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7")

        await this.performance.click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview")

        await this.dash.click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        await this.directory.click({force:true})
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory")

        await this.claim.click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim")

        await this.buzz.first().click()
         await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz")

        await this.profile.click()
         //await this.page.waitForURL()

        await this.logout.click()
        // await this.page.waitForURL()
    }
}
export default Dashboardpage