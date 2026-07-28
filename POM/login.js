class LoginPage {
     /**
   * @param {import('playwright').Page} page
   */

    constructor(page){
        this.page = page;
        this.username = page.locator('//input[@name="username"]');
        this.password = page.locator("//input[@name='password']");
        this.loginBtn = page.locator("//button[@type='submit']");
    }

    async navigate(url){
        await this.page.goto(url);
    }

    async login(un,pw){
        await this.username.fill(un);
        await this.password.fill(pw);
        await this.loginBtn.click();

    }

} 
export default LoginPage;

