const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
let answers = [];

// takes the markup and writes it to an index file
const writeFile = (markUp) =>{
    return new Promise((resolve,reject) =>{
        fs.writeFile(`./dist/index.html`,markUp,err=>{
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

        //promp the user for managers information
        {
            type:'input',
            name: 'name',
            message: 'What is the team managers name',
            validate: promptName =>{
                if(promptName){
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        {
            type:'number',
            name: 'id',
            message: 'What is the team managers id number?',
            
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
        {
            type:'number',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
            validate: officeNumber =>{
                if(officeNumber){
                    return true;
                }
                else{
                    console.log(' Please enter an office number.')
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
        
        
        return inquirer.prompt([


            //promp the user for managers information
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
                type:'number',
                name: 'id',
                message: 'What is the Engineers id number?',
                validate: id =>{
                    if(id){
                        return true;
                    }
                    else{
                        console.log('Please enter an id number.')
                        return false;
                    }
                }
            },
            {
                type:'input',
                name: 'email',
                message: 'What is the Engineers email address',
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
        .then(currentData =>{
            answers.push(currentData);
            console.log(answers);
            return currentData;

        })
    
    }



startPrompt()
.then(data =>{
    answers.push(data)
    if(data.add === 'Engineer'){
        return engineerPrompt(data);
    }
})
.then(newData =>{
    console.log(`this is data from the bottom ${newData}`);
})
