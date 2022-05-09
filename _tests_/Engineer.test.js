const Engineer = require('../lib/Engineer')

//const newHireEngineer = new Engineer ("Alec", "Engineer", 2, "alec@fakemail.com", "ibealec@github.com");


describe("Engineer", () => {
    test("Test for name", () => {
      let newHireEngineer = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
      expect(newHireEngineer.getName()).toBe("Alec");
    });
    test("Test for Id", () => {
      let newHireEngineer = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
      expect(newHireEngineer.getId()).toBe(2);
    });
    test("Test for Email", () => {
      let newHireEngineer = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
      expect(newHireEngineer.getEmail()).toBe("alec@fakemail.com");
    });
    test("Test for github", () => {
      let newHireEngineer = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
      expect(newHireEngineer.getGitHub()).toBe("ibealec");
    });
    test("Test for getRole", () => {
      let newHireEngineer = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
      expect(newHireEngineer.getRole()).toBe("Engineer");
    });
  });