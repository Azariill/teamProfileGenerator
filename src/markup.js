
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');


// takes the engineerArray from currentData and generates enigneer HTML
const generateEngineer = engineerArray =>{
    // checks to make sure engineer array has data
    if(engineerArray){
        // takes enigneer data and formats it into cards and returns it to main markup
        return`
            ${engineerArray
                .map(({name, id, email, github}) =>{
                    const engineer = new Engineer(name,id,email,github);
                    return `
        
                <div class="card  ms-3" style="width: 18rem;">
                    <div class="card-body border border-dark bg-primary text-light card-background">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title"> ${engineer.getRole()}</h3>
                    </div>
    
                    <div class="card-body">
                        <p class="card-text border border-dark p-3 rounded">${engineer.getId()}</p>
                        <p class="card-text border border-dark p-3 rounded">${engineer.getEmail()}</p>
                        <p class="card-text border border-dark p-3 rounded"> GitHub : ${engineer.getGithub()}</p>
                    </div>
                </div>`
                    
                }) }`
            }
    else { return '' }

    }
// takes internArray data from currentData and generates Intern HTML
const generateIntern = internArray =>{
    // verifies that there is interArray data
   if(internArray){
       // if there is array data formats the data into html cards
     return`
    ${internArray
        .map(({name, id, email, school}) =>{
            const intern = new Intern(name,id,email,school);
            return `

        <div class="card  ms-3 " style="width: 18rem;">
            <div class="card-body border border-dark bg-primary text-light card-background">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"> ${intern.getRole()}</h3>
            </div>

            <div class="card-body">
                <p class="card-text border border-dark p-3 rounded">${intern.getId()}</p>
                <p class="card-text border border-dark p-3 rounded">${intern.getEmail()}</p>
                <p class="card-text border border-dark p-3 rounded"> School : ${intern.getSchool()}</p>
            </div>
        </div>`
        }) }`
    }else {return ''}

}





// exports main function to generate html page
module.exports = currentData => {
    // takes inquirer data and deconstructs it
    const {engineers,interns,...managerData} = currentData;
   // generates new manager object
    const manager = new Manager(managerData.name,managerData.id,managerData.email,managerData.officeNumber);
    
    // takes all data and generates a webpage with it for team
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
    </head>

    <body>
      <header class="bg-danger" style="height: 20vh;"><h1 class="text-center pt-5 text-light" style="font-size: 50px;"> My Team</h1></header>

        <section class="section bg-secondary p-5">

            <div class="container d-flex flex-wrap bg-light p-5 m-auto">
    
                <div class="card  ms-3 " style="width: 18rem;">

                    <div class="card-body border border-dark bg-primary text-light card-background">
                        <h2 class="card-title">${manager.getName()}</h5>
                        <h3 class="card-title"> ${manager.getRole()}</h5>
                    </div>

                     <div class="card-body">
                        <p class="card-text border border-dark p-3 rounded">${manager.getId()}</p>
                        <p class="card-text border border-dark p-3 rounded">${manager.getEmail()}</p>
                        <p class="card-text border border-dark p-3 rounded"> Office number : ${manager.officeNumber}</p>
                    </div>
                </div>
                    ${generateEngineer(engineers)};
                    ${generateIntern(interns)};
                
            </div>
    
      
    
  </section>
    <script src="https://kit.fontawesome.com/45a35d6d6a.js" crossorigin="anonymous"></script>
  </body>
</html>
    `
}
