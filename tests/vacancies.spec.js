


import {test,expect} from "@playwright/test"
import Home from "../POM/Home.page";
import Recruitment from "../POM/Recruitment.page";
import path from "path";

test.use({storageState:'./auth/admin.auth.json'});
test("adding vacancies",async({page})=>{
        await page.goto(process.env.BASE_URL);
        
        const data={vname:"Hiring12"+`${Math.round(Math.random()*10*89)}`,positions:"10",jobTitle:"Account Assistant",hiringmanager:"Orange "};
        const HomePage=new Home(page);
        await HomePage.recruitment.click();

        const RecruitmentPage=new Recruitment(page);
        await RecruitmentPage.add_vacancy(data);
        await RecruitmentPage.vacancies.click();
        await page.locator('div[role="row"]').filter({hasText:data.vname,exact:true}).waitFor()
        await expect(await page.locator('div[role="row"]').filter({hasText:data.vname,exact:true})).toBeTruthy();


})
