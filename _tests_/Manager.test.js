const Manager = require('../lib/Manager')

const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)


test("testing manager construct", ()=>{
    expect(typeof(newHireManager)).toBe("object")
})

//test name,role, id, email, office number was set on object

test("can set name property on new object", ()=>{
    expect(newHireManager.name).toBe("Jared")
})

test("can set role property on new object", ()=>{
    expect(newHireManager.role).toBe("Manager")
})
test("can set id property on new object", ()=>{
    expect(newHireManager.id).toBe(1)
})

test("can set email property on new object", ()=>{
    expect(newHireManager.email).toBe("jared@fakemail.com")
})

test("can set officeNumber property on new object", ()=>{
    expect(newHireManager.officeNumber).toBe(1)
})

//Testing all methods

test("getName method", ()=>{
    const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)
    expect(newHireManager.getName()).toEqual("Jared")
})

test("getRole method", ()=>{
    const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)
    expect(newHireManager.getRole()).toEqual("Manager")
})

test("getId method", ()=>{
    const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)
    expect(newHireManager.getId()).toEqual(1)
})

test("getEmail method", ()=>{
    const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)
    expect(newHireManager.getEmail()).toEqual("jared@fakemail.com")
})

test("getOfficeNumber method", ()=>{
    const newHireManager = new Manager("Jared", "Manager", 1, "jared@fakemail.com", 1)
    expect(newHireManager.getOfficeNumber()).toEqual(1)
})