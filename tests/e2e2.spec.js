



import {test ,expect} from "@playwright/test"
import Home from "../POM/Home.page";
import userData from "../utils/userData";
import path from "path";
import Admin from "../POM/Admin.page.js"
import Leave from "../POM/Leave.page.js"
import leaveData from "../utils/leaveData.js";
import getEmployee from "../utils/employee.js";
import Pim from "../POM/Pim1.page.js";

test.use({storageState:path.join(__dirname,'../auth/admin.auth.json')});

test("adding the user and applaying leave",async({page})=>{




    await page.goto(process.env.BASE_URL)

    const empData=getEmployee();

    const data=userData(empData);
    const leaveData1=leaveData(data.empname);

    const HomePage=new Home(page);

    await HomePage.pimLink.click();
    const PimPage=new Pim(page);
    await PimPage.addEmployeeFunction(empData.firstname,empData.middlename,empData.lastname);
    await page.waitForTimeout(1000);

    
    await HomePage.adminLink.click();
    
    const AdminPage=new Admin(page);

    await AdminPage.addUser(data);

    await HomePage.leaveLink.click();

    const LeavePage=new Leave(page);
    await LeavePage.add_LeaveEntitlement(leaveData1);

   // await LeavePage.searchEntitlement(leaveData1);
    await page.waitForLoadState("load");

    await page.locator('div[role="cell"]').filter({hasText:"10",exact:true}).last().waitFor();
    await expect(await page.locator('div[role="cell"]').filter({hasText:"10"}).last()).toHaveText("10");
    

})