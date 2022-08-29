const Manager = require("../lib/Manager");

// object(name, id, email, office#)
test("create manager data", () => {
  const manager = new Manager("Aaron", 1, "aaron@email.com", "1234567890");

  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("get office#", () => {
  const manager = new Manager("Aaron", 1, "aaron@email.com", "1234567890");

  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("get role from employee", () => {
  const manager = new Manager("Aaron", 1, "aaron@email.com", "1234567890");

  expect(manager.getRole()).toEqual("Manager");
});
