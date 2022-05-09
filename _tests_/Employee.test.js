const Employee = require('../lib/Employee');


describe("Employee", () => {
    test("Test for name", () => {
      let newHireEmployee = new Employee("Jessica", 555 , "jessica@fakemail.com");
      expect(newHireEmployee.getName()).toBe("Jessica");
    });
    test("Test for Id", () => {
      let newHireEmployee = new Employee("Jessica", 555 , "jessica@fakemail.com");
      expect(newHireEmployee.getId()).toEqual(555);
    });
    test("Test for Email", () => {
      let newHireEmployee = new Employee("Jessica", 555, "jessica@fakemail.com");
      expect(newHireEmployee.getEmail()).toBe("jessica@fakemail.com");
    });
    test("Test for getRole", () => {
      let newHireEmployee = new Employee("Jessica", 555, "jessica@fakemail.com");
      expect(newHireEmployee.getRole()).toBe("Employee");
    });
  });