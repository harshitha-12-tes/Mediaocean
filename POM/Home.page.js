


class Home{

    constructor(page){
        this.page=page;
        this.pimLink=page.getByRole("link",{name:"PIM"});
    }

    
}

export default Home;