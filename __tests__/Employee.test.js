const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("name", () => {
    it("name matches", () => {
      const name = "Matt";
      const employee = new Employee(name);

      expect(employee.getName()).toEqual(name);
    });
  });
  describe("id", () => {
    it("id matches", () => {
      const id = 1;
      const employee = new Employee(null, id);

      expect(employee.getId()).toEqual(id);
    });
  });
  describe("email", () => {
    it("email matches", () => {
      const email = "mattgrogan.dev@gmail.com";
      const employee = new Employee(null, null, email);

      expect(employee.getEmail()).toEqual(email);
    });
  });
  describe("role", () => {
    it("role matches", () => {
      const role = "Employee";
      const employee = new Employee(null, null, null, role);

      expect(employee.getRole()).toEqual(role);
    });
  });
});
