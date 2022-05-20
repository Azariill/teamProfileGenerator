
const Employee = require('../lib/Employee');



// run a test to verify that ea class is creating and applying properties correctly
test('create a new employee with expected values', ()=>{
    const employee = new Employee('Scott', 1051615, 'heierms@gmail.com');
   
    // Test employee creation 
    expect(employee.name).toBe('Scott');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('heierms@gmail.com');
});

test('test get name method', () => {
    
    const employee = new Employee('Scott','1051615', 'heierms@gmail.com');
      
    expect(employee.getName()).toBe('Scott');

});

test('test getId method return number', ()=>{
    const employee = new Employee('Scott', 1151, 'heierms@gmail.com');

    expect(employee.getId()).toEqual("ID : 1151");

})

test('test getEmail() method to return email', () =>{
    const employee = new Employee('Scott', 1151, 'heierms@gmail.com');

    expect(employee.getEmail()).toEqual("Email : <a href=\"mailTo:heierms@gmail.com\"> heierms@gmail.com</a>");
})

test('make sure that getRole() returns employee', () =>{
    const employee = new Employee('Scott', 11115, 'heierms@gmail.com');

    expect(employee.getRole()).toBe("Employee");
})