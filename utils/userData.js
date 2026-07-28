




function userData(data1){

    const data={}

    data.role="ESS";
    data.status='Enabled';
    data.empname=`${data1.firstname} ${data1.middlename} ${data1.lastname}`;
    data.username=data1.lastname;
    data.password='123456aA';
    data.confirmPassword=data.password;
    return data;

}

export default userData;