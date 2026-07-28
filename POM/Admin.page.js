

class Admin{

    constructor(page){

        this.page=page;
        this.addButton=page.getByRole("button",{name:" Add "});
        this.role=page.locator('div[class="oxd-select-wrapper"]');
        this.status=page.locator('div[class="oxd-select-wrapper"]');
        this.empName=page.getByPlaceholder("Type for hints...");
        this.username=page.locator('input[class="oxd-input oxd-input--active"]');
        this.password=page.locator('input[type="password"]');
        this.confirmPassword=page.locator('input[type="password"]');
        this.saveButton=page.getByRole("button",{name:" Save "});

    }

    async addUser(data){
        await this.addButton.click();
        await this.role.first().click();
        await this.page.getByText(data.role,{exact:true}).click();
        await this.status.last().click();
        await this.page.getByText(data.status,{exact:true}).click();
        await this.empName.pressSequentially(data.empname);
        // await this.page.keyboard.press("ArrowDown");
        // await this.page.keyboard.press("Enter");
        await this.page.getByText(data.empname,{exact:true}).first().click();

        await this.username.nth(1).fill(data.username);
        await this.password.first().fill(data.password);
        await this.confirmPassword.last().fill(data.confirmPassword);
       // await this.page.pause();
        await this.saveButton.click();
    }

}
export default Admin