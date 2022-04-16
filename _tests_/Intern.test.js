const Intern = require('../lib/Intern')

const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")


describe("Intern", ()=>{
    test("test name", ()=>{
        expect(newHireIntern.getName()).toBe("John")
    })

    test("test role", ()=>{
        expect(newHireIntern.getRole()).toBe("Intern")
    })
    test("test id", ()=>{
        expect(newHireIntern.getId()).toBe(5)
    })

    test("test email", ()=>{
        expect(newHireIntern.getEmail()).toBe("john@fakemail.com")
    })

    test("test school", ()=>{
        expect(newHireIntern.getSchool()).toBe("2University")
    })

})