const Intern = require('../lib/Intern.js');


test('create a new employee with expected values', ()=>{
  
    
    const intern = new Intern('Sevro', 555,'sevro@gmail.com', 'UT');

  
    //test intern creation
    expect(intern.name).toBe('Sevro');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe(intern.email);
    expect(intern.school).toEqual(expect.any(String));

});


test('getSchool() should return intern.school', () => {
    const intern = new Intern('Sevro', 555,'sevro@gmail.com', 'UT');
    expect(intern.getSchool()).toEqual(intern.school);
})

test('make sure that getRole() returns employee', () =>{
    const employee = new Intern ('Scott', 11115, 'heierms@gmail.com','UT');

    expect(employee.getRole()).toBe("<i class=\"fa-solid fa-user-graduate\"></i> Intern");
})