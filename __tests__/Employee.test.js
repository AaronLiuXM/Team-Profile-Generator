const Employee = require("../lib/Employee");

test("create employee datas", () => {
  const employee = new Employee("Aaron", 1, "aaron@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Employee("Aaron", 1, "aaron@email.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's ID", () => {
  const employee = new Employee("Aaron", 1, "aaron@email.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Employee("Aaron", 1, "aaron@email.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("gets employee's name", () => {
  const employee = new Employee("Aaron", 1, "aaron@email.com");

  expect(employee.getRole()).toEqual("Employee");
});
