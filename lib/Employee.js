class Employee{
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //methods to return information from employee objects
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
    
}

module.exports = Employee