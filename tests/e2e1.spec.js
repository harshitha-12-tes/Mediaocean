


import {test,expect} from "@playwright/test"
import Home from "../POM/Home.page"
import Pim from "../POM/Pim1.page"
import path from "path"
import getEmployee from "../utils/employee"


test.use({storageState:path.join(__dirname,"../auth/admin.auth.json")})

test("end to end testing 1 ",async({browser})=>{

    const data=getEmployee();
    //CREATION OF PAGE FOR ADMIN
    const context=await browser.newContext()
    const page1=await context.newPage();

    await page1.goto(process.env.BASE_URL)

    const HomePage=new Home(page1);

    await HomePage.pimLink.click();

    const PimPage=new Pim(page1)

    await PimPage.addEmployeeFunction(data.firstname,data.middlename,data.lastname);
    await PimPage.searchEmployee(data.firstname)
    await expect(page1.getByRole("row").filter({hasText:`${data.firstname +" "+data.middlename}`,exact:true}));  
})