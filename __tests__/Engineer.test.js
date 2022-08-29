const Engineer = require("../lib/Engineer");

// object(name, id, email, github)
test("create Engineer data", () => {
  const engineer = new Engineer("Aaron", 1, "aaron@email.com", "AaronLiuXM");

  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer github link", () => {
  const engineer = new Engineer("Aaron", 1, "aaron@email.com", "AaronLiuXM");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("get role from employee", () => {
  const engineer = new Engineer("Aaron", 1, "aaron@email.com", "AaronLiuXM");

  expect(engineer.getRole()).toEqual("Engineer");
});
