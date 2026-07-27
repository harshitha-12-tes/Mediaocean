import { test } from "../Fixtures/Object.js";
import ExcelUtility from "../utils/ExcelUtility.js";

test("Add Multiple Employees", async ({
    loginPage,
    dashboardPage,
    pimPage,
    addEmpPage
}) => {

    const employees = ExcelUtility.readExcel(
        "./testData/orgHRM.xlsx",
        "Sheet1"
    );

    await loginPage.login("Admin", "admin123");
    await dashboardPage.PIMclick();
    console.log(employees);
    for (const emp of employees) {

        await pimPage.addEmp();

        await addEmpPage.newEmp(
            emp.FirstName,
            emp.MiddleName,
            emp.LastName
        );

        await addEmpPage.credentials(
            emp.Username,
            emp.Password,
            emp.ConfirmPassword
        );
    }
});