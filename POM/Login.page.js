//LOGIN CLASS  FOR LOGIN LOCATORS AND METHODS


class Login{
    constructor(page){
        this.page=page;
        this.username=page.getByPlaceholder('Username');
        this.password=page.getByPlaceholder("Password");
        this.loginButton=page.getByRole("button",{name:" Login "});
    }

    async loginFunction(username,password){
       await  this.page.goto(process.env.BASE_URL);
       await  this.username.fill(username);
       await  this.password.fill(password)
       await  this.loginButton.click();

       
    }
}

export default Login;