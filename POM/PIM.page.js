export default class PIMpage
{
    constructor(page)
    {
        this.page=page;
        this.addempBTN=page.getByText("Add Employee")
    }

    async addEmp()
    {
        await this.addempBTN.click()
    }
}
