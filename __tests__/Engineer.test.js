const Engineer = require('../lib/Engineer.js');


test('create a new employee with expected values', ()=>{

    const engineer = new Engineer('James', 2, 'eng@gmail.com', 'Azariill');



    //test engineer creation
    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('eng@gmail.com');
    expect(engineer.github).toEqual(expect.any(String));
  
});

test('return a website link to github', () => {
    const engineer = new Engineer('Time', 2,'enen@gmail.com', 'Azariill');

    expect(engineer.getGithub()).toEqual(`github.com/${engineer.github}`);
})




test('make sure that getRole() returns employee', () =>{
    const employee = new Engineer('Scott', 11115, 'heierms@gmail.com','Azarill');

    expect(employee.getRole()).toBe('Engineer');
})