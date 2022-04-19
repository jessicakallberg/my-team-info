const Employee = require('./Employee');


class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
        }

    //methods to return information from Manager objects
    getName(){
        return this.name
    }

    getRole(){
        return "Intern"
    }

    getId(){
        return this.Id
    }

    getEmail(){
        return this.email
    }

    getSchool(){
        return this.school
    }
    

};



module.exports = Intern
