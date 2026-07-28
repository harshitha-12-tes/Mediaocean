export default class PIMpage
{
    constructor(page)
    {
        this.page=page;
        this.addempBTN=page.getByRole('link',{name:'Add Employee'})
    }

    async addEmp()
    {
        await this.addempBTN.click()
    }
}
