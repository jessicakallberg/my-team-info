class Employee{
    constructor(name, role, id, email,){
        this.name = name;
        this.name = role;
        this.id = id;
        this.email = email;
    }
    //methods to return information from employee objects
    getName(){
        return this.name
    }

    getRole(){
        return this.role
    }

    getId(){
        return this.Id
    }

    getEmail(){
        return this.email
    }
}

module.exports = Employee