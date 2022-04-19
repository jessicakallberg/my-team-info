const Intern = require('../lib/Intern')

//const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")


test("test name", ()=>{
    const myValue = "John"
    const int = new Intern(myValue)
    expect(int.getName()).toBe(myValue)
    })

    test("test role", ()=>{
        const myValue = "Intern"
        const int = new Intern(myValue)
        expect(int.getRole()).toBe(myValue)
        })

        test("test id", ()=>{
            const myValue = 5
            const int = new Intern(myValue)
            expect(int.getId()).toBe(myValue)
            })

            test("test email", ()=>{
                const myValue = "john@fakemail.com"
                const int = new Intern(myValue)
                expect(int.getEmail()).toBe(myValue)
                })

                test("test school", ()=>{
                    const myValue = "2University"
                    const int = new Intern(myValue)
                    expect(int.getSchool()).toBe(myValue)
                    });
