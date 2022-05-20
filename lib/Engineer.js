const Employee = require('./Employee');

// asigns a new enineer class and extend employees methods to it
class Engineer extends Employee{ 
    // asign constructor with 4 properties
    constructor(name,id,email,github){
        // grabs the 3 properties from employee that are in common
        super(name,id,email);
        
        this.github = github;

    }
    // take this.github and returns it formatted for html
    getGithub(){
        return `<a href="github.com/${this.github}">  ${this.github}</a>`;
    }

   
}

module.exports = Engineer;