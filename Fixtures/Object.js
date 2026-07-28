import { test as base, expect } from "@playwright/test";
import LoginPage from "../POM/LoginPage.page.js" 
import dashPage from "../POM/Dashboard.page.js" 
import PIMpage from "../POM/PIM.page.js" 
import addEmp from "../POM/addEmp.page.js"

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new dashPage(page));
  },

  pimPage: async ({ page }, use) => {
    await use(new PIMpage(page));
  },

  addEmpPage: async ({ page }, use) => {
    await use(new addEmp(page));
  }
});

export { expect };