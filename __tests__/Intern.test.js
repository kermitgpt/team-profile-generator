const Intern = require("../lib/Intern");

describe("intern", () => {
  describe("name", () => {
    it("name matches", () => {
      const name = "Matt";
      const intern = new Intern(name);

      expect(intern.getName()).toEqual(name);
    });
  });
  describe("id", () => {
    it("id matches", () => {
      const id = 1;
      const intern = new Intern(null, id);

      expect(intern.getId()).toEqual(id);
    });
  });
  describe("email", () => {
    it("email matches", () => {
      const email = "mattgrogan.dev@gmail.com";
      const intern = new Intern(null, null, email);

      expect(intern.getEmail()).toEqual(email);
    });
  });
  describe("school", () => {
    it("school matches", () => {
      const school = "Northern Arizona University";
      const intern = new Intern(null, null, null, school);

      expect(intern.getSchool()).toEqual(school);
    });
  });
  describe("role", () => {
    it("role matches", () => {
      const role = "Intern";
      const intern = new Intern(null, null, null, null, role);

      expect(intern.getRole()).toEqual(role);
    });
  });
});
