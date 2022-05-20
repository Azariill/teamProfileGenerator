const Employee = require('./Employee');

// creates a new manager class
class Manager extends Employee{ 
    // create manager constructor
    constructor(name,id,email,officeNumber){
        // shares 3 properties with parent Employee class
        super(name,id,email);
        
        this.officeNumber = officeNumber;

    }


   
}

module.exports = Manager;