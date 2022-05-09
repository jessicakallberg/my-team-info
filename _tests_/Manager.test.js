const Manager = require('../lib/Manager')

//const newHireManager = new Manager("Jared", 1 , "jared@fakemail.com", 1)


describe("Manager", () => {
    test("Test for name", () => {
      let newHireManager = new Manager("Jared", 1 , "jared@fakemail.com", 1);
      expect(newHireManager.getName()).toBe("Jared");
    });
    test("Test for Id", () => {
      let newHireManager = new Manager("Jared", 1 , "jared@fakemail.com", 1);
      expect(newHireManager.getId()).toBe(1);
    });
    test("Test for Email", () => {
      let newHireManager = new Manager("Jared", 1 , "jared@fakemail.com", 1);
      expect(newHireManager.getEmail()).toBe("jared@fakemail.com");
    });
    test("Test for officeNumber", () => {
      let newHireManager = new Manager("Jared", 1 , "jared@fakemail.com", 1);
      expect(newHireManager.getOfficeNumber()).toBe(1);
    });
    test("Test for getRole", () => {
      let newHireManager = new Manager("Jared", 1 , "jared@fakemail.com", 1);
      expect(newHireManager.getRole()).toBe("Manager");
    });
  });