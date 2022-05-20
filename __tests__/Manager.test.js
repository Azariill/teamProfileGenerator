const Manager = require('../lib/Manager');


test('create a new employee with expected values', ()=>{
   
    const manager = new Manager('George', 1, 'gmanager@gmail.com', 2215);


    //test manager creation 
    expect(manager.name).toBe('George');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('gmanager@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));

});


test('make sure that getRole() returns employee', () =>{
    const employee = new Manager('Scott', 11115, 'heierms@gmail.com','Azarill');

    expect(employee.getRole()).toBe('Manager');
})