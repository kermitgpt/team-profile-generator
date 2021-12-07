const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("name", () => {
    it("name matches", () => {
      const name = "Matt";
      const manager = new Manager(name);

      expect(manager.getName()).toEqual(name);
    });
  });
  describe("id", () => {
    it("id matches", () => {
      const id = 1;
      const manager = new Manager(null, id);

      expect(manager.getId()).toEqual(id);
    });
  });
  describe("email", () => {
    it("email matches", () => {
      const email = "mattgrogan.dev@gmail.com";
      const manager = new Manager(null, null, email);

      expect(manager.getEmail()).toEqual(email);
    });
  });
  describe("officeNumber", () => {
    it("officeNumber matches", () => {
      const officeNumber = 5;
      const manager = new Manager(null, null, null, officeNumber);

      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });
  describe("role", () => {
    it("role matches", () => {
      const role = "Manager";
      const manager = new Manager(null, null, null, null, role);

      expect(manager.getRole()).toEqual(role);
    });
  });
});
