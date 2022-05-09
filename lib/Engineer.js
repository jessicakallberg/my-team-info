 const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }

    //methods to return information from Engineer objects

    getGitHub(){
        return this.gitHub;
    }
    
    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer