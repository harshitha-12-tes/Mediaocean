# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orange_smoke.spec.js >> smoke
- Location: tests\orange_smoke.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[text()="Dashboard"]')

```

# Test source

```ts
  1  | class Dashboardpage{
  2  |      /**
  3  |    * @param {import('playwright').Page} page
  4  |    */
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.profile = page.locator(".oxd-userdropdown-tab")
  8  |         this.pim = page.locator("//span[text()='PIM']")
  9  |         this.leave=page.locator('//span[text()="Leave"]')
  10 |         this.time=page.locator('//span[text()="Time"]')
  11 |         this.info=page.locator('//span[text()="My Info"]')
  12 |         this.performance=page.locator('//span[text()="Performance"]')
  13 |         this.dash=page.locator('//span[text()="Dashboard"]')
  14 |         this.directory=page.locator('//span[text()="Directory"]')
  15 |         this.claim=page.locator('//span[text()="Claim"]')
  16 |         this.buzz=page.locator('//a[@class="oxd-main-menu-item"]')
  17 |         this.profile = page.locator(".oxd-userdropdown-tab")
  18 |         this.logout = page.locator('//a[text()="Logout"]')
  19 |     }
  20 |     async dashboard() {
  21 |         await this.profile.click()
  22 | 
  23 |         await this.pim.click()
  24 |         await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  25 | 
  26 |         await this.leave.click()
  27 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList")
  28 | 
  29 |         await this.time.click()
  30 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet")
  31 | 
  32 |         //await this.recruitment.click()
  33 | 
  34 |         await this.info.click()
  35 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7")
  36 | 
  37 |         await this.performance.click()
  38 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview")
  39 | 
> 40 |         await this.dash.click()
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  41 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  42 | 
  43 |         await this.directory.click({force:true})
  44 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory")
  45 | 
  46 |         await this.claim.click()
  47 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim")
  48 | 
  49 |         await this.buzz.first().click()
  50 |          await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz")
  51 | 
  52 |         await this.profile.click()
  53 |          //await this.page.waitForURL()
  54 | 
  55 |         await this.logout.click()
  56 |         // await this.page.waitForURL()
  57 |     }
  58 | }
  59 | export default Dashboardpage
```