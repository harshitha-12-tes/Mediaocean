export default class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.usernameTF=page.getByPlaceholder("Username")
        this.passowrdTF=page.getByPlaceholder("Password")
        this.loginBTN=page.getByRole('button',{name:' Login '})
    }
    async login(username,passowrd)
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await this.usernameTF.fill(username);
        await this.passowrdTF.fill(passowrd);
        await this.loginBTN.click()

    }
}

