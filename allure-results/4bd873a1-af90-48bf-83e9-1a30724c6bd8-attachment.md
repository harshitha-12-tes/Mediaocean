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
TypeError: this.performance is not a function
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
  11 |         this.recruitment=page.locator('(//a[@class="oxd-main-menu-item"])[4]')
  12 |         this.info=page.locator('//span[text()="My Info"]')
  13 |         this.performance=page.locator('//span[text()="Performance"]')
  14 |         this.dash=page.locator('//span[text()="Dashboard"]')
  15 |         this.directory=page.locator('//span[text()="Directory"]')
  16 |         this.claim=page.locator('//span[text()="Claim"]')
  17 |         this.buzz=page.locator('//span[text()="Buzz"]')
  18 |     }
  19 |     async dashboard() {
  20 |         await this.profile.click();
  21 |         //await this.logout.click();
  22 |         await this.pim.click()
  23 |         await this.leave.click()
  24 |         await this.time.click()
  25 |         await this.recruitment.click()
  26 |         await this.info.click()
> 27 |         await this.performance()
     |                    ^ TypeError: this.performance is not a function
  28 |         await this.dash.click()
  29 |         await this.directory.click()
  30 |         await this.claim.click()
  31 |         await this.buzz.click()
  32 |     }
  33 | }
  34 | export default Dashboardpage
```