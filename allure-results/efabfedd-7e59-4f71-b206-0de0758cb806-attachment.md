# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login
- Location: tests\login.spec.js:5:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Login' }) resolved to 2 elements:
    1) <button type="submit" data-ga-track="spa-event|login|login|Save||||true" class="waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform">Login</button> aka getByRole('button', { name: 'Login', exact: true })
    2) <button type="submit" class="waves-effect waves-light btn-large btn-block btn-bold otpButton textTransform">Use OTP to Login</button> aka getByRole('button', { name: 'Use OTP to Login' })

Call log:
  - waiting for getByRole('button', { name: 'Login' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - img
  - img
  - generic [ref=e5]:
    - link "Naukri.com" [ref=e6] [cursor=pointer]:
      - /url: https://www.naukri.com
      - img "Naukri.com" [ref=e7]
    - navigation "Main navigation":
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Jobs" [ref=e10] [cursor=pointer]:
            - /url: https://www.naukri.com
            - generic [ref=e11]: Jobs
        - listitem [ref=e12]:
          - link "Companies" [ref=e13] [cursor=pointer]:
            - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
            - generic [ref=e14]: Companies
        - listitem [ref=e15]:
          - link "Services" [ref=e16] [cursor=pointer]:
            - /url: https://resume.naukri.com/?fftid=100001
            - generic [ref=e17]: Services
    - generic [ref=e18] [cursor=pointer]:
      - button "Search jobs here" [ref=e19]
      - generic [ref=e20]: Search jobs here
      - button [ref=e21]:
        - generic [ref=e22]: 
    - generic [ref=e23]:
      - link "Login" [ref=e24] [cursor=pointer]:
        - /url: https://login.naukri.com/nLogin/Login.php
      - link "Register" [ref=e25] [cursor=pointer]:
        - /url: https://www.naukri.com/registration/createAccount?othersrcp=22636
    - list [ref=e26]:
      - listitem [ref=e27]:
        - button "For employers" [ref=e28]:
          - generic [ref=e29]:
            - text: For employers
            - generic [ref=e30]: 
  - generic [ref=e37]:
    - generic:
      - generic [ref=e38]:
        - strong [ref=e41]: New to Naukri?
        - generic [ref=e42]:
          - generic [ref=e44]:
            - emphasis [ref=e45]: check
            - text: One click apply using naukri profile.
          - generic [ref=e47]:
            - emphasis [ref=e48]: check
            - text: Get relevant job recommendations.
          - generic [ref=e50]:
            - emphasis [ref=e51]: check
            - text: Showcase profile to top companies and consultants.
          - generic [ref=e53]:
            - emphasis [ref=e54]: check
            - text: Know application status on applied jobs.
        - link "Register for Free" [ref=e57] [cursor=pointer]:
          - /url: //www.naukri.com/registration/createAccount
        - img [ref=e60]
      - generic [ref=e62]:
        - generic [ref=e63]:
          - strong [ref=e66]: Login
          - generic [ref=e67]:
            - generic [ref=e69]:
              - generic [ref=e70]: Email ID / Username
              - textbox "Enter Email ID / Username" [ref=e71]: apitesting1205@gmail.com
            - generic [ref=e73]:
              - generic [ref=e74]: Password
              - textbox "Enter Password" [active] [ref=e75]: Apitesting@26
              - generic [ref=e76] [cursor=pointer]: Show
              - link "Forgot Password?" [ref=e78] [cursor=pointer]:
                - /url: /nlogin/forgotpassword
            - generic [ref=e80]:
              - button "Login" [ref=e81] [cursor=pointer]
              - button "Use OTP to Login" [ref=e82] [cursor=pointer]
        - generic [ref=e84]:
          - generic [ref=e86]: Or
          - generic [ref=e88] [cursor=pointer]:
            - img [ref=e89]
            - generic [ref=e90]: Sign in with Google
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
  9  |         this.pw=page.locator('//input[@id="passwordField"]')
  10 |         this.loginbtn=page.getByRole("button", {name:'Login'})
  11 |     }
  12 | 
  13 |     async loginfnction(email,pw){
  14 |             await this.loginbutton.click()
  15 |             await this.email.fill(email)
  16 |             await this.pw.fill(pw)
> 17 |             await this.loginbtn.click()
     |                                 ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Login' }) resolved to 2 elements:
  18 |     }
  19 | 
  20 | }
  21 | export default login
```