class Employee{ 
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

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
        if(this.officeNumber){
            return "Manager";
        }
        else if(this.github){
            return "Engineer";
        }
        else if(this.school){
            return "Intern";
        }
        else{
            return "Employee";
        }
    
    }
}

module.exports = Employee;