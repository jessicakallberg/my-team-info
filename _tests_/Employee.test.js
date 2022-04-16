const Employee = require('../lib/Employee')

const newHireEmployee = new Employee("Jessica", "Employee", 555, "jess@fakemail.com")


describe("Employee", ()=>{
    test("test name", ()=>{
        expect(newHireEmployee.getName()).toBe("Jessica")
    })

    test("test role", ()=>{
        expect(newHireEmployee.getRole()).toBe("Employee")
    })

    test("test id", ()=>{
        expect(newHireEmployee.getId()).toBe(555)
    })

    test("test email", ()=>{
        expect(newHireEmployee.getEmail()).toBe("jess@fakemail.com")
    })

});