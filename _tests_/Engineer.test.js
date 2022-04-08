const Engineer = require('../lib/Engineer')

const newHireEngineer = new Engineer ("Alec", "Engineer", 2, "alec@fakemail.com", "ibealec")


test("testing Engineer construct", ()=>{
    expect(typeof(newHireEngineer)).toBe("object")
})

//test name,role, id, email, gitHub was set on object

test("can set name property on new object", ()=>{
    expect(newHireEngineer.name).toBe("Jared")
})

test("can set role property on new object", ()=>{
    expect(newHireEngineer.role).toBe("Engineer")
})
test("can set id property on new object", ()=>{
    expect(newHireEngineer.id).toBe(2)
})

test("can set email property on new object", ()=>{
    expect(newHireEngineer.email).toBe("alec@fakemail.com")
})

test("can set gitHub property on new object", ()=>{
    expect(newHireEngineer.gitHub).toBe("ibealec")
})

//Testing all methods

test("getName method", ()=>{
    expect(newHireEngineer.getName()).toBe("Jared")
})

test("getRole method", ()=>{
    expect(newHireEngineer.getRole()).toBe("Engineer")
})

test("getId method", ()=>{
    expect(newHireEngineer.getId()).toBe(2)
})

test("getEmail method", ()=>{
    expect(newHireEngineer.getEmail()).toBe("alec@fakemail.com")
})

test("getOfficeNumber method", ()=>{
    expect(newHireEngineer.gitHub()).toBe("ibealec")
})