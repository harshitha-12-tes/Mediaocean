export default class dashPage
{
    constructor(page)
    {
        this.page = page;
        this.PIMLink=page.getByRole('link',{name:'PIM'})
    }

    async PIMclick()
    {
        await this.PIMLink.click()
    }
}