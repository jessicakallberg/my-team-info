const Employee = require('./Employee');


class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

//methods to return information from Manager objects
    getName(){
        return this.name
    }

    getRole(){
        return "Manager"
    }

    getId(){
        return this.Id
    }

    getEmail(){
        return this.email
    }

    getOfficeNumber(){
        return this.officeNumber
    }

};



module.exports = Manager