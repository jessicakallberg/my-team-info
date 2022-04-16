const Manager = require('../lib/Manager')

const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)


describe("Manger", ()=>{
    test("Test for name", ()=>{
        expect(newHireManager.getName()).toBe("Jared")
    })

    test("Test for role", ()=>{
        expect(newHireManager.getRole()).toBe("Manager")
    })
    test("Test for id ", ()=>{
        expect(newHireManager.getId()).toBe(1)
    })

    test("Test for email", ()=>{
        expect(newHireManager.getEmail()).toBe("jared@fakemail.com")
    })

    test("Test for office number", ()=>{
        expect(newHireManager.getOfficeNumber()).toBe(1)
    })
})




