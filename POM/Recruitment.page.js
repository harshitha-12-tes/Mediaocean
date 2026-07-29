


class Recruitment{
    constructor(page)
    {
        this.page=page;
        this.vacancies=page.getByRole("link",{name:"Vacancies"});
        this.addButton=page.getByRole("button",{name:" Add "});
        this.vacancyName=page.locator('input[class="oxd-input oxd-input--active"]');
        this.jobTitle=page.getByText("-- Select --");
        this.hiringManager=page.getByPlaceholder("Type for hints...");
        this.positions=page.locator('input[class="oxd-input oxd-input--active"]');
        this.saveButton=page.getByRole("button",{name:" Save "});

    }

    async add_vacancy(data){
        await this.vacancies.click();
        await this.addButton.click();
        await this.vacancyName.nth(1).fill(data.vname);
        await this.jobTitle.click();
        await this.page.getByText(data.jobTitle).click();
        await this.positions.last().fill(data.positions);
        await this.hiringManager.fill(data.hiringmanager);
        await this.page.getByText("Orange Test",{exact:true}).click();
        await this.saveButton.click();
         
        

    }
}

export default Recruitment;