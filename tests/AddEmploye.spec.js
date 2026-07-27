import {test} from "../Fixtures/Object.js"

test("Add employee", async ({
  loginPage,
  dashboardPage,
  pimPage,
  addEmpPage
}) => {

  await loginPage.login("Admin", "admin123");
  await dashboardPage.PIMclick();
  await pimPage.addEmp();
  await addEmpPage.newEmp("Alex", "Rob", "Fred");
  await addEmpPage.credentials("Alex", "123456", "12345678");
});