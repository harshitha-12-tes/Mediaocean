

class Pim{

    constructor(page){
        this.page=page;

        //LOCATORS FOR ADDING THE EMPLOYEE

        this.addEmployee=page.getByRole("link",{name:"Add Employee"});
        this.firstNameLoc=page.getByPlaceholder('First Name');
        this.middleNameLoc=page.getByPlaceholder("Middle Name");
        this.lastNameLoc=page.getByPlaceholder('Last Name');
        this.saveButton=page.getByRole("button",{name:" Save "});

        //LOCATORS FOR SEARCHING THE EMPLOYEE

        this.employeeName=page.getByPlaceholder("Type for hints...")
        this.employeeList=page.getByRole("link",{name:"Employee List"});
        this.searchButton=page.getByRole("button",{name:" Search "});
    }

    async addEmployeeFunction(firstName,middleName,lastName)
    {
        await this.addEmployee.click();
        await this.firstNameLoc.fill(firstName)
        await this.middleNameLoc.fill(middleName)
        await this.lastNameLoc.fill(lastName)
        console.log(await this.page.locator('input[class="oxd-input oxd-input--active"]').last().textContent())
        await this.saveButton.click();
        
    }

    async searchEmployee(user){
        await this.employeeList.click();
        await this.employeeName.first().pressSequentially(user);
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter")
        await this.searchButton.click();
    }
}


export default Pim;