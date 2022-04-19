const Engineer = require('../lib/Engineer')

//const newHireEngineer = new Engineer ("Alec", "Engineer", 2, "alec@fakemail.com", "ibealec@github.com")


test("test name", ()=>{
    const myValue = "Alec"
    const en = new Engineer(myValue)
    expect(en.getName()).toBe(myValue)
    })

    test("test role", ()=>{
        const myValue = "Engineer"
        const en = new Engineer(myValue)
        expect(en.getRole()).toBe(myValue)
        })

        test("test id", ()=>{
            const myValue = 2
            const en = new Engineer(myValue)
            expect(en.getId()).toBe(myValue)
            })

            test("test email", ()=>{
                const myValue = "alec@fakemail.com"
                const en = new Engineer(myValue)
                expect(en.getEmail()).toBe(myValue)
                })

                test("test github", ()=>{
                    const myValue = "ibealec@github.com"
                    const en = new Engineer(myValue)
                    expect(en.getGitHub()).toBe(myValue)
                    });

