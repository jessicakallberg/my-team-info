const Manager = require('../lib/Manager')

test("testing Manager", ()=>{
    test("test all properties of Manager", ()=>{
        const manager = new Manager("Jared", 1, "jared@fakemail.com", 1)

        this.name=
        this.id=
        this.email=
        this.officeNumber=
        expect(manager.name).toEqual("Jared")
        expect(manager.id).toEqual(1)
        expect(manager.email).toEqual("jared@fakemail.com")
        expect(manager.officeNumber).toEqual(1)
    })

    test("test name", ()=>{

    })

    test("test id", ()=>{

    })

    test("test email", ()=>{

    })

    test("test office number", ()=>{

    })

    test("test all methods of Manager", ()=>{
        test("getName", ()=>{
            const manager = new Manager("Jessica", 2, "jess@fakemail.com", 555)
            expect(manager.getName()).toEqual("Jess")
        })

        test("getId", ()=>{
            const manager = new Manager("Jessica", 2, "jess@fakemail.com", 555)
            expect(manager.getId()).toEqual(2)
        })

        test("getEmail", ()=>{
            const manager = new Manager("Jessica", 2, "jess@fakemail.com", 555)
            expect(manager.getEmail()).toEqual("jess@fakemail.com")
        })

        test("getOfficeNumber", ()=>{
            const manager = new Manager("Jessica", 2, "jess@fakemail.com", 555)
            expect(manager.getOfficeNumber()).toEqual(555)
        })
    })

});