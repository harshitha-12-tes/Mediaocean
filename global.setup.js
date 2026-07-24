

import Login from "./POM/Login.page"
import {chromium} from "@playwright/test"




export default async function global(){

     const browser=await chromium.launch()
     const context=await browser.newContext()
     const page=await context.newPage();
     //console.log(process.env.AUSERNAME,process.env.APASSWORD)
     const LoginPage=new Login(page);
     await LoginPage.loginFunction(process.env.AUSERNAME,process.env.APASSWORD);
     await page.context().storageState({path:"auth/admin.auth.json"})
     //  console.log("storage stage got created")
}
