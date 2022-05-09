const Intern = require('../lib/Intern')

//const newHireIntern = new Intern ("John", 5, "john@fakemail.com", "2University")


describe("Intern", () => {
    test("Test for name", () => {
      let newHireIntern = new Intern("John", 5, "john@fakemail.com", "2University");
      expect(newHireIntern.getName()).toBe("John");
    });
    test("Test for Id", () => {
      let newHireIntern = new Intern("John", 5, "john@fakemail.com", "2University");
      expect(newHireIntern.getId()).toBe(5);
    });
    test("Test for Email", () => {
      let newHireIntern = new Intern("John", 5, "john@fakemail.com", "2University");
      expect(newHireIntern.getEmail()).toBe("john@fakemail.com");
    });
    test("Test for school", () => {
      let newHireIntern = new Intern("John", 5, "john@fakemail.com", "2University");
      expect(newHireIntern.getSchool()).toBe("2University");
    });
    test("Test for getRole", () => {
      let newHireIntern = new Intern("Jack", 4, "jack@Jack.com", "Perdue");
      expect(newHireIntern.getRole()).toBe("Intern");
    });
  });