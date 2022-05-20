
// creat a new class employee
class Employee{ 
    // assigns consturctor for employee class that takes 3 properies
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // takes this.name and returns a capitalized version of it
    getName(){
        const name = this.name[0].toUpperCase() + this.name.slice(1);
        return name;
    }
 // takes this.id and returns a formatted version for HTML
    getId(){
        return `ID : ${this.id}`;
    }
// takes this.email and formats it for HTML
    getEmail(){
        return `Email : <a href="mailTo:${this.email}"> ${this.email}</a>`;
    }

// filters to see if it is a manager, enigneer or a intern returns outcome
    getRole(){
        if(this.officeNumber){
            return `<i class='fa-solid fa-mug-hot'></i> Manager`;
        }
        else if(this.github){
            return `<i class="fa-solid fa-glasses"></i> Engineer`;
        }
        else if(this.school){
            return `<i class="fa-solid fa-user-graduate"></i> Intern`;
        }
        else{
            return "Employee";
        }
    
    }
}

module.exports = Employee;