const Engineer = require('../lib/Engineer')

const newHireEngineer = new Engineer ("Alec", "Engineer", 2, "alec@fakemail.com", "ibealec")


describe("Engineer", ()=>{
    test("test name", ()=>{
        expect(newHireEngineer.getName()).toBe("Jared")
    })

    test("test role", ()=>{
        expect(newHireEngineer.getRole()).toBe("Engineer")
    })
    test("test id", ()=>{
        expect(newHireEngineer.getId()).toBe(2)
    })

    test("test email", ()=>{
        expect(newHireEngineer.getEmail()).toBe("alec@fakemail.com")
    })

    test("test github", ()=>{
        expect(newHireEngineer.getGitHub()).toBe("ibealec")
    })
})
// //Testing all methods

// test("getName method", ()=>{
//     expect(newHireEngineer.getName()).toBe("Jared")
// })

// test("getRole method", ()=>{
//     expect(newHireEngineer.getRole()).toBe("Engineer")
// })

// test("getId method", ()=>{
//     expect(newHireEngineer.getId()).toBe(2)
// })

// test("getEmail method", ()=>{
//     expect(newHireEngineer.getEmail()).toBe("alec@fakemail.com")
// })

// test("getOfficeNumber method", ()=>{
//     expect(newHireEngineer.gitHub()).toBe("ibealec")
// })