class Employee{ 
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        const name = this.name[0].toUpperCase() + this.name.slice(1);
        return name;
    }

    getId(){
        return `ID : ${this.id}`;
    }

    getEmail(){
        return `Email : <a href="mailTo:${this.email}"> ${this.email}</a>`;
    }

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