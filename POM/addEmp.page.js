export default class addEmp
{
    constructor(page)
    {
        this.page=page;
        this.firstNameTF=page.getByPlaceholder("First Name");
        this.middleNameTF=page.getByPlaceholder("Middle Name");
        this.lastNameTF=page.getByPlaceholder("Last Name")
        this.loginDetailRB=page.locator(".oxd-switch-wrapper");
        this.usernameTF=page.getByRole('textbox').nth(5)
        this.passwordTF=page.locator('input[type="password"]').first()
        this.confirmPwdTF=page.locator('input[type="password"]').nth(1)
        this.saveBTN=page.getByRole('button',{name:" Save "})
    }
    async newEmp(firstname,middlename,lastname)
        {
            await this.firstNameTF.fill(firstname)
            await this.middleNameTF.fill(middlename)
            await this.lastNameTF.fill(lastname)
            await this.loginDetailRB.click()
        }
    async credentials(username,password,confirmPwd)
    {
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(String(password))
        await this.confirmPwdTF.fill(String(confirmPwd))
        await this.saveBTN.click()
    }
}