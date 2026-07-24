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
  - waiting for locator('//span[text()="Directory"]')

```

# Test source

```ts
  1  | class Dashboardpage{
  2  |      /**
  3  |    * @param {import('playwright').Page} page
  4  |    */
  5  |     constructor(page) {
  6  |         this.profile = page.locator(".oxd-userdropdown-tab")
  7  |         this.pim = page.locator("//span[text()='PIM']")
  8  |         this.leave=page.locator('//span[text()="Leave"]')
  9  |         this.time=page.locator('//span[text()="Time"]')
  10 |         this.info=page.locator('//span[text()="My Info"]')
  11 |         this.performance=page.locator('//span[text()="Performance"]')
  12 |         this.dash=page.locator('//span[text()="Dashboard"]')
  13 |         this.directory=page.locator('//span[text()="Directory"]')
  14 |         this.claim=page.locator('//span[text()="Claim"]')
  15 |         this.buzz=page.locator('//a[@class="oxd-main-menu-item"]')
  16 |         this.profile = page.locator(".oxd-userdropdown-tab")
  17 |         this.logout = page.locator('//a[text()="Logout"]')
  18 |     }
  19 |     async dashboard() {
  20 |         await this.profile.click();
  21 |         await this.pim.click()
  22 |         await this.leave.click()
  23 |         await this.time.click({force:true})
  24 |         //await this.recruitment.click()
  25 |         await this.info.click()
  26 |         await this.performance.click()
  27 |         await this.dash.click()
> 28 |         await this.directory.click({force:true})
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 |         await this.claim.click()
  30 |         await this.buzz.first().click()
  31 |         await this.profile.click();
  32 |         await this.logout.click();
  33 |     }
  34 | }
  35 | export default Dashboardpage
```