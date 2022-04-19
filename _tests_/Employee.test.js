const Employee = require('../lib/Employee')

//const newHireEmployee = new Employee("Employee","Jessica", 555, "jessica@fakemail.com")


test("test role", ()=>{
    const myValue = "Employee"
    const e = new Employee(myValue)
    expect(e.getRole()).toBe(myValue);
    }),

    test("test name", ()=>{
        const myValue = "Jessica"
        const e = new Employee(myValue)
        expect(e.getName()).toBe(myValue);
        }),

        test("test id", ()=>{
            const myValue = 555
            const e = new Employee(myValue)
            expect(e.getId()).toBe(myValue)
        }),

            test("test email", ()=>{
                const myValue = "jessica@fakemail.com"
                const e = new Employee(myValue)
                expect(e.getEmail()).toBe(myValue)
            });