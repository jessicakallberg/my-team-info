const Employee = require('../lib/Employee')

const newHireEmployee = new Employee("Jessica", "Employee", 555, "jessfakemail.com")


test("testing employee construct", ()=>{
    expect(typeof(newHireEmployee)).toBe("object")
})

//test name, id, email was set on object

test("can set name property on new object", ()=>{
    expect(newHireEmployee.name).toBe("Jessica")
})

test("can set role property on new object", ()=>{
    expect(newHireEmployee.role).toBe("Employee")
})

test("can set the id property on new object", ()=>{
    expect(newHireEmployee.id).toBe(555)
})

test("can set the email property on object", ()=>{
    expect(newHireEmployee.email).toBe("jessfakemail.com")
})

//Testing all methods

test("getName method", ()=>{
    const newHireEmployee = new Employee("Jessica", "Employee", 555, "jessfakemail.com")
    expect(newHireEmployee.getName()).toEqual("Jessica")
})

test("getRole method", ()=>{
    const newHireEmployee = new Employee("Jessica", "Employee", 555, "jessfakemail.com")
    expect(newHireEmployee.getRole()).toEqual("Employee")
})

test("getId method", ()=>{
    const newHireEmployee = new Employee("Jessica", "Employee", 555, "jessfakemail.com")
    expect(newHireEmployee.getId()).toEqual(555)
})

test("getEmail method", ()=>{
    const newHireEmployee = new Employee("Jessica", "Employee", 555, "jessfakemail.com")
    expect(newHireEmployee.getEmail()).toEqual("jessfakemail.com")
})