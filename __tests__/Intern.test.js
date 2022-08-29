const Intern = require("../lib/Intern");

// object(name, id, email, github)
test("create intern data", () => {
  const intern = new Intern("Aaron", 1, "aaron@email.com", "CU");

  expect(intern.school).toEqual(expect.any(String));
});

test("get employee school", () => {
  const intern = new Intern("Aaron", 1, "aaron@email.com", "AaronLiuXM");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("get role from employee", () => {
  const intern = new Intern("Aaron", 1, "aaron@email.com", "AaronLiuXM");

  expect(intern.getRole()).toEqual("Intern");
});
