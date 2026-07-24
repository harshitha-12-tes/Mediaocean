


import {test,expect} from "@playwright/test"
import Home from "../POM/Home.page"
import Pim from "../POM/Pim.page"
import path from "path"



test.use({storageState:path.join(__dirname,"../auth/admin.auth.json")})

test("end to end testing 1 ",async({browser})=>{


    //CREATION OF PAGE FOR ADMIN
    const context=await browser.newContext()
    const page1=await context.newPage();

    await page1.goto(process.env.BASE_URL)

    const HomePage=new Home(page1);

    await HomePage.pimLink.click();

    const PimPage=new Pim(page1)
    await PimPage.addEmployeeFunction("test1","m","k");

    await PimPage.searchEmployee('test1')

    await expect(page1.getByRole("row").filter({hasText:"test1 m",exact:true}));


    
})