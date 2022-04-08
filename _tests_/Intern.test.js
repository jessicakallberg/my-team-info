const Intern = require('../lib/Intern')

const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")


test("testing Intern construct", ()=>{
    expect(typeof(newHireIntern)).toBe("object")
})

//test name,role, id, email, office number was set on object

test("can set name property on new object", ()=>{
    expect(newHireIntern.name).toBe("John")
})

test("can set role property on new object", ()=>{
    expect(newHireIntern.role).toBe("Intern")
})
test("can set id property on new object", ()=>{
    expect(newHireIntern.id).toBe(5)
})

test("can set email property on new object", ()=>{
    expect(newHireIntern.email).toBe("john@fakemail.com")
})

test("can set school property on new object", ()=>{
    expect(newHireIntern.school).toBe("2University")
})

//Testing all methods

test("getName method", ()=>{
    const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")
    expect(newHireIntern.getName()).toEqual("John")
})

test("getRole method", ()=>{
    const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")
    expect(newHireIntern.getRole()).toEqual("Intern")
})

test("getId method", ()=>{
    const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")
    expect(newHireIntern.getId()).toEqual(5)
})

test("getEmail method", ()=>{
    const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")
    expect(newHireIntern.getEmail()).toEqual("john@fakemail.com")
})

test("getSchool method", ()=>{
    const newHireIntern = new Intern ("John", "Intern", 5, "john@fakemail.com", "2University")
    expect(newHireIntern.getSchool()).toEqual("2University")
})