# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> smoke
- Location: tests\login.spec.js:5:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "/OrangeHRM/"
Received: "OrangeHRM"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "OrangeHRM"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: taaJRQeYUW user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- img "profile picture"
- paragraph: Punched Out
- paragraph: "Punched Out: Today at 10:43 AM (GMT 5.5)"
- text: 0h 4m Today
- button ""
- separator
- paragraph: This Week
- paragraph: Jul 20 - Jul 26
- text: 
- paragraph: 0h 4m
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (1) Timesheet to Approve
- button
- paragraph: (1) Pending Self Review
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- button "Assign Leave"
- paragraph: Assign Leave
- button "Leave List"
- paragraph: Leave List
- button "Timesheets"
- paragraph: Timesheets
- button "Apply Leave"
- paragraph: Apply Leave
- button "My Leave"
- paragraph: My Leave
- button "My Timesheet"
- paragraph: My Timesheet
- text: 
- paragraph: Buzz Latest Posts
- separator
- img "profile picture"
- paragraph: taaJRQeYUW akhil user
- paragraph: 2026-24-07 10:41 AM
- separator
- paragraph: Automation Test Buzz Post
- img "profile picture"
- paragraph: taaJRQeYUW akhil user
- paragraph: 2026-24-07 10:40 AM
- separator
- img
- img "profile picture"
- paragraph: taaJRQeYUW akhil user
- paragraph: 2026-24-07 10:35 AM
- separator
- img
- img "profile picture"
- paragraph: taaJRQeYUW akhil user
- paragraph: 2026-24-07 10:14 AM
- separator
- paragraph: Buzz automation post validation 1784868243747
- img "profile picture"
- paragraph: taaJRQeYUW akhil user
- paragraph: 2026-24-07 10:04 AM
- separator
- paragraph: Hshdixndosnznmmnbbggggtddguvccvnoavsudbbfbbdhdhdhdhdhsndkosbsgdjdbdjdjfjcjsjsnxmdmsksidudgsjsjsksksksknsnsbsnsnsnsnanbbhusnskoshwvskskxnbdvvvaigevsnsmsmsmozgsvshshsvvsvsbsvg
- iframe
- paragraph: Employees on Leave Today
- text: 
- separator
- img "No Content"
- paragraph: No Employees are on Leave Today
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- list:
  - listitem: Engineering
  - listitem: Human Resources
  - listitem: Administration
  - listitem: Client Services
  - listitem: Unassigned
- text: 
- paragraph: Employee Distribution by Location
- separator
- list:
  - listitem: Texas R&D
  - listitem: New York Sales Office
  - listitem: Unassigned
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import{expect, test} from "@playwright/test"
  2  | import LoginPage from "../POM/login"
  3  | import loginpage from "../DDt/loginpage.json"
  4  | 
  5  | test("smoke",async({page})=>{
  6  |     let lp=new LoginPage(page)
  7  |     await lp.navigate(loginpage.url)
  8  |     await lp.login(loginpage.username,loginpage.password)
  9  |     let text=await page.locator('//img[@alt="client brand banner"]')
> 10 |     await expect(page).toHaveTitle("/OrangeHRM/")
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  11 | 
  12 | })
```