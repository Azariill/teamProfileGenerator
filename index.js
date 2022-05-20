const fs = require('fs');
const inquirer = require('inquirer');
const internal = require('stream');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/markup');


// takes the markup and writes it to an index file
const writeFile = (pageHTML) =>{
    return new Promise((resolve,reject) =>{
        fs.writeFile(`./dist/index.html`,pageHTML,err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created!'
            });

        });
    });

};

const startPrompt = () =>{

    //return inquirer prompts
    return inquirer.prompt([

        // prompt the user for managers information
        // prompts for manager name
        {
            type:'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: promptName =>{
                if(promptName){
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        // ask for project managers id number
        {
            type:'input',
            name: 'id',
            message: 'What is the project managers id number?',
            validate: idInput =>{
                if(parseInt(idInput)){
                    return true;
                }
                else{ 
                    console.log(' Please enter the project managers id number.')
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your project managers email address?',
            validate: email =>{
                function isValid(email) {
                        var regx = /\S+@\S+\.\S+/;
                        return regx.test(email);}
                if(email && isValid(email) === true){
                    return true;
                }else{
                    console.log(' Please enter a valid email adress');
                    return false;
                }
            }

        },
        //prompt for project managers office number
        {
            type:'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
            validate: offNumInput =>{
                if(parseInt(offNumInput)){
                    return true;
                }
                else{ 
                    console.log(' Please enter the project managers office number.')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add a new Engineer or Intern?',
            choices: ['Engineer', 'Intern', 'Neither']
        }
    ])
}

const engineerPrompt = currentData =>{
        //return inquirer prompts
        
        if(!currentData.engineers){
            currentData.engineers = [];
        }
        
        return inquirer.prompt([


            // promp the user for managers information
            {
                type:'input',
                name: 'name',
                message: 'What is the engineers name?',
                validate: name =>{
                    if(name){
                        return true;
                    }
                    else{
                        console.log('What is the engineers name?')
                        return false;
                    }
                }
                
           
            },
            {
                type:'input',
                name: 'id',
                message: 'What is the engineers id number?',
                validate: idInput =>{
                    if(parseInt(idInput)){
                        return true;
                    }
                    else{ 
                        console.log(' Please enter the engineers id number.')
                        return false;
                    }
                }
            },
            {
                type:'input',
                name: 'email',
                message: 'What is the Engineers email address?',
                validate: email =>{
                    function isValid(email) {
                            var regx = /\S+@\S+\.\S+/;
                            return regx.test(email);}
                    if(email && isValid(email) === true){
                        return true;
                    }else{
                        
                        return false;
                    }
                }
    
            },
            {
                type:'input',
                name: 'github',
                message: 'What is the Engineers github username?',
                validate: github =>{
                    if(github){
                        return true;
                    }
                    else{
                        
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'add',
                message: 'Would you like to add a new Engineer or Intern?',
                choices: ['Engineer', 'Intern', 'Neither'],
                
            }
        ])
        .then(engineerData =>{
            let choice = engineerData.add;
         
            currentData.engineers.push(engineerData);
                if(choice === 'Engineer'){
                    return engineerPrompt(currentData);
                }
                else if(choice === 'Intern'){
                    
                    return internPrompt(currentData);
                }
                else{
                    console.log('exit the eg prompts')
                    return currentData;
                }

        })
    
    }
const internPrompt = currentData =>{
        //return inquirer prompts
        
        if(!currentData.interns){
            currentData.interns = [];
        }
        
        return inquirer.prompt([


            //promp the user for managers information
            {
                type:'input',
                name: 'name',
                message: 'What is the interns name?',
                validate: name =>{
                    if(name){
                        return true;
                    }
                    else{
                        console.log('What is the interns name?')
                        return false;
                    }
                }
                
           
            },
            {
                type:'input',
                name: 'id',
                message: 'What is the interns id number?',
                validate: idInput =>{
                    if(parseInt(idInput)){
                        return true;
                    }
                    else{ 
                        console.log(' What is the interns id number?')
                        return false;
                    }
                }
            },
            {
                type:'input',
                name: 'email',
                message: 'What is the interns email address',
                validate: email =>{
                    function isValid(email) {
                            var regx = /\S+@\S+\.\S+/;
                            return regx.test(email);}
                    if(email && isValid(email) === true){
                        return true;
                    }else{
                        
                        return false;
                    }
                }
    
            },
            {
                type:'input',
                name: 'school',
                message: 'What is the name of the interns school?',
                validate: school =>{
                    if(school){
                        return true;
                    }
                    else{
                        
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'add',
                message: 'Would you like to add a new Engineer or Intern?',
                choices: ['Engineer', 'Intern', 'Neither'],
                
            }
        ])
        .then(internData =>{
            let choice = internData.add; 

            currentData.interns.push(internData);
            if(choice === 'Engineer'){
                return engineerPrompt(currentData);
            }
            else if(choice === 'Intern'){
                return internPrompt(currentData);
            }
            else{
                return currentData;
            }

        })
    
    }



startPrompt()

.then(data =>{
    if(data.add === 'Engineer'){
        return engineerPrompt(data)
    }
    else if(data.add === 'Intern'){
        return internPrompt(data);
    }
    else{
        return data
    }
})
.then(currentData =>{
    return generatePage(currentData);
    
})
.then(pageHTML =>{
    return writeFile(pageHTML);
})
.then(writeFileResponse =>{
    console.log(writeFileResponse);
})


