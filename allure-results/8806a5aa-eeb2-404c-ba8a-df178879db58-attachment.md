# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login
- Location: tests\login.spec.js:5:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@aria-label="Password"]')

```

# Test source

```ts
  1  | class login{
  2  |      /**
  3  |    * @param {import('playwright').Page} page
  4  |    */
  5  | 
  6  |     constructor(page){
  7  |         this.loginbutton=page.locator('//a[text()="Login"]')
  8  |         this.email=page.locator('//input[@id="usernameField"]')
  9  |         this.pw=page.locator('//input[@aria-label="Password"]')
  10 |         this.loginbtn=page.getByRole("button", {name:'Login'})
  11 |     }
  12 | 
  13 |     async loginfnction(email,pw){
  14 |             await this.loginbutton.click()
  15 |             await this.email.fill(email)
> 16 |             await this.pw.fill(pw)
     |                           ^ Error: locator.fill: Target page, context or browser has been closed
  17 |             await this.loginbtn.click()
  18 |     }
  19 | 
  20 | }
  21 | export default login
```