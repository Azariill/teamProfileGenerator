const fs = require('fs');
const inquirer = require('inquirer');
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

// Initial inquirer prompts
const startPrompt = () =>{

    // prompt the user for managers information
    return inquirer.prompt([   
        // prompts for manager name validates that something was entered for name 
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
        // ask for project managers id number and validates that a number was entered 
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
        // asks for  project managers email
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
        // asks if they would like to add and engineer intern or be finished
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add a new Engineer or Intern?',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ])
}

const engineerPrompt = currentData =>{
        console.log(`
        ==================
        Add a New Engineer
        ==================
        `)
        
        // if enigeers array doesn't exist make it
        if(!currentData.engineers){
            currentData.engineers = [];
        }
       // start engineer prompts 
        return inquirer.prompt([
        // ask for the engineers name
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
            // ask for the engineers id number and validate that its a number
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
            // ask for email and validate it
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
            // ask for github and validate
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
            // ask if they would like to add more or finish
            {
                type: 'list',
                name: 'add',
                message: 'Would you like to add a new Engineer or Intern?',
                choices: ['Engineer', 'Intern', 'Finished'],
                
            }
        ])
        // check was the choice was and prompt accordingly
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
                    console.log('Finished')
                    return currentData;
                }

        })
    
    }
const internPrompt = currentData =>{
    console.log(`
    ==================
    Add a New Intern
    ==================
    `)
        //return inquirer prompts
        // create an array for interns if there is not one
        if(!currentData.interns){
            currentData.interns = [];
        }
        
        return inquirer.prompt([


            //ask for intern name
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
            // ask for intern id
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
            // ask for intern email
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
            //ask for intern school
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
            // ask for more team members or finish
            {
                type: 'list',
                name: 'add',
                message: 'Would you like to add a new Engineer or Intern?',
                choices: ['Engineer', 'Intern', 'Finished'],
                
            }
        ])
        // check what the answer was
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


// startup prompt
startPrompt()

// figure out was the first response was to adding more team member was 
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
// once all data is recieved run generatePage
.then(currentData =>{
    return generatePage(currentData);
    
})
// once you have the page html write it to index.html
.then(pageHTML =>{
    return writeFile(pageHTML);
})
// write the response to the file write
.then(writeFileResponse =>{
    console.log(writeFileResponse.message);
})
// watch for errors
.catch(err => console.log(err));

