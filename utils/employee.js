

function getEmployee(){
    const data={}

    data.firstname="test";
    data.middlename="middle"
    data.lastname="last"+`${Math.round(Math.random()*100)}`
    return data;

}

export default getEmployee;