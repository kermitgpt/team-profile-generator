const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("name", () => {
    it("name matches", () => {
      const name = "Matt";
      const engineer = new Engineer(name);

      expect(engineer.getName()).toEqual(name);
    });
  });
  describe("id", () => {
    it("id matches", () => {
      const id = 1;
      const engineer = new Engineer(null, id);

      expect(engineer.getId()).toEqual(id);
    });
  });
  describe("email", () => {
    it("email matches", () => {
      const email = "mattgrogan.dev@gmail.com";
      const engineer = new Engineer(null, null, email);

      expect(engineer.getEmail()).toEqual(email);
    });
  });
  describe("github", () => {
    it("github matches", () => {
      const github = "mattgrogandev";
      const engineer = new Engineer(null, null, null, github);

      expect(engineer.getGithub()).toEqual(github);
    });
  });
  describe("role", () => {
    it("role matches", () => {
      const role = "Engineer";
      const engineer = new Engineer(null, null, null, null, role);

      expect(engineer.getRole()).toEqual(role);
    });
  });
});
