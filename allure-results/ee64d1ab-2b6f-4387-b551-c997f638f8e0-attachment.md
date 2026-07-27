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
  6  |         this.profile = page.locator(".oxd-userdropdown-tab");
  7  |       //  this.logout = page.locator("//a[text()='Logout']");
  8  |         this.pim = page.locator("//span[text()='PIM']");
  9  |         this.leave=page.locator('(//a[@class="oxd-main-menu-item"])[2]')
  10 |         this.time=page.locator('(//a[@class="oxd-main-menu-item"])[3]')
  11 |         this.info=page.locator('//span[text()="My Info"]')
  12 |         this.performance=page.locator('//span[text()="Performance"]')
  13 |         this.dash=page.locator('//span[text()="Dashboard"]')
  14 |         this.directory=page.locator('//span[text()="Directory"]')
  15 |         this.claim=page.locator('//span[text()="Claim"]')
  16 |         this.buzz=page.locator('//span[text()="Buzz"]')
  17 |     }
  18 |     async dashboard() {
  19 |         await this.profile.click();
  20 |         //await this.logout.click();
  21 |         await this.pim.click()
  22 |         await this.leave.click()
  23 |         await this.time.click()
  24 |         await this.info.click()
  25 |         await this.performance.click()
  26 |         await this.dash.click()
> 27 |         await this.directory.click()
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |         await this.claim.click()
  29 |         await this.buzz.click()
  30 |     }
  31 | }
  32 | export default Dashboardpage
```