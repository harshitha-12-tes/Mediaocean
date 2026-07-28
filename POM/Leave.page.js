



class Leave{
    constructor(page){
        this.page=page;
        this.Entitlements=page.getByText("Entitlements ",{exact:true});
        this.addEntitlementLink=page.getByRole("menuitem",{name:"Add Entitlements"});
        this.empName=page.getByPlaceholder("Type for hints...");
        this.leave=page.getByText("-- Select --");

        this.period=page.locator('div[class="oxd-select-text-input"]');
        this.Entitlement=page.locator('input[class="oxd-input oxd-input--active"]');
        this.saveButton=page.getByRole("button",{name:" Save "});
        this.confirm=page.getByRole("button",{name:" Confirm "});

        this.searchButton=page.getByRole("button",{name:" Search "});

    }
   async add_LeaveEntitlement(data){
        await this.Entitlements.last().click();
        await this.addEntitlementLink.click();
        await this.empName.pressSequentially(data.empname);
        await this.page.getByText(data.empname,{exact:true}).first().click();
        await this.leave.first().click();
        await this.page.getByText(data.leaveType,{exact:true}).click();
        //await this.period.last().click();
        //await this.page.getByText(data.period,{exact:true}).click();
        await this.Entitlement.last().fill(data.entitlement);
       // await this.page.pause();
        await this.saveButton.click();
        await this.confirm.click();

    }

    async searchEntitlement(data){
        await this.page.pause();
        await this.Entitlement.first().click();
        await this.getByText("Employee Entitlements").click();
        await this.empName.fill(data.empname);
        await this.leave.click();
        await this.getByText(data.leaveType).click();
        await this.period.click();
        await this.getByText(data.period).click();
        await this.searchButton.click();
    }
}

export default Leave;