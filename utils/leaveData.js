



function leaveData(empname){
    const data={};
    data.empname=empname;
    data.leaveType="CAN - Bereavement"
    data.period="01-01-2027 - 31-12-2027";
    data.entitlement="10";

    return data;

}

export default leaveData;