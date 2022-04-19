const Manager = require('../lib/Manager')

//const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)


test("test name", ()=>{
    const myValue = "Jared"
    const mgr = new Manager(myValue)
    expect(mgr.getName()).toBe(myValue)
    })

    test("test role", ()=>{
        const myValue = "Manager"
        const mgr = new Manager(myValue)
        expect(mgr.getRole()).toBe(myValue)
        })

        test("test id", ()=>{
            const myValue = 1
            const mgr = new Manager(myValue)
            expect(mgr.getId()).toBe(myValue)
            })

            test("test email", ()=>{
                const myValue = "jared@fakemail.com"
                const mgr = new Manager(myValue)
                expect(mgr.getEmail()).toBe(myValue)
                })

                test("test officeNumber", ()=>{
                    const myValue = 1
                    const mgr = new Manager(myValue)
                    expect(mgr.getOfficeNumber()).toBe(myValue)
                    });
