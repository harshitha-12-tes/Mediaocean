


class Home{

    constructor(page){
        this.page=page;
        this.pimLink=page.getByRole("link",{name:"PIM"});
        this.adminLink=page.getByRole("link",{name:"Admin"});
        this.leaveLink=page.getByRole("link",{name:"Leave"});
    }

    
}

export default Home;