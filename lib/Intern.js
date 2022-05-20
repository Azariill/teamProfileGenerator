const Employee = require('./Employee');

// creates a new intern class
class Intern extends Employee{ 
    // creates consturctor with 4 properties
    constructor(name,id,email,school){
        // shares 3 properties with parent Employee class
        super(name,id,email);
        
        this.school = school;

    }
    // returns this.school
    getSchool(){

        return this.school;
    }


   
}

module.exports = Intern;