export default class addEmp
{
    constructor(page)
    {
        this.page=page;
        this.firstNameTF=page.getByPlaceholder("First Name");
        this.middleNameTF=page.getByPlaceholder("Middle Name");
        this.lastNameTF=page.getByPlaceholder("Last Name")
        this.loginDetailRB=page.locator(".oxd-switch-wrapper");
    }
    async newEmp(firstname,middlename,lastname,empid)
        {
            await this.firstNameTF.fill(firstname)
            await this.middleNameTF.fill(middlename)
            await this.lastNameTF.fill(lastname)
            await this.loginDetailRB.click()
        }
}