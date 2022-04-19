 const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }

    //methods to return information from Engineer objects

    getName(){
        return this.name
    }

    getRole(){
        return "Engineer"
    }

    getId(){
        return this.Id
    }

    getEmail(){
        return this.email
    }

    getGitHub(){
        return this.gitHub
    }

};

module.exports = Engineer