const Engineer = require('../lib/Engineer.js');


test('create a new employee with expected values', ()=>{
    const employee = new Employee('Scott', 1051615, 'heierms@gmail.com');
    const manager = new Manager('George',01, 'gmanager@gmail.com');
    const engineer = new Engineer('James', 02, 'eng@gmail.com');
    const intern = new Intern('Sevro',05,'sevro@gmail.com');

    // Test employee creation 
    expect(employee.name).toBe('Scott');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('heierms@gmail.com');
    //test manager creation 
    expect(manager.name).toBe('George');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('gmanager@gmail.com');
    //test engineer creation
    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('eng@gmail.com');
    //test intern creation
    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('eng@gmail.com');

});