import {test} from "@playwright/test"
import LoginPage from "../POM/LoginPage.page"
import dashPage from "../POM/Dashboard.page"
import PIMpage from "../POM/PIM.page"
import addEmp from "../POM/addEmp.page"

test("Add employee",async({page})=>{
    let lp=new LoginPage(page);
    let dp=new dashPage(page);
    let pm=new PIMpage(page);
    let ae=new addEmp(page)
    await lp.login("Admin","admin123");
    await dp.PIMclick()
    await pm.addEmp()
    await ae.newEmp("Alex","Rob","Fred","12345678")
    await ae.credentials("Alex","123456","12345678")
})