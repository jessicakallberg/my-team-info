const Employee = require('../lib/Employee')

const newHire = new Employee("Jessica", 555, "jessfakemail.com")

// hired = {
//     name: "Jessica",
//     id: 555,
//     email: "jessfakemail.com"
// }

test("can construct employee object", ()=>{
    expect(typeof(newHire)).toBe("object")

})

//test name, empl number, email was set on to the object

test("can set the name property on a new object", ()=>{
    expect(newHire.name).toBe("Jessica")
})

test("can set the id property on object", ()=>{
    expect(newHire.id).toBe(555)
})

test("can set the email property on object", ()=>{
    expect(newHire.email).toBe("jessfakemail.com")
})

test("getName method", ()=>{
    expect(newHire.getName()).toBe("Jessica")
})