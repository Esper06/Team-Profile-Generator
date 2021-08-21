//first we bring in the file we're testing
const exp = require('constants');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require ('../constructors/base');

//then we write our test and give it an object
test('creates an employee object', () => {
    const employee = new Employee('Test', 30, 'test@gmail.com');

    //then we write our tests. Here we are checking to see if the name, id, and email all equal the data types that they should
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//we also make one for the get role to check if it's still working
test('gets role of employee', () => {
    const employee = new Employee('Test', 30, 'test@gmail.com');

    expect(employee.getRole()).toEqual("placeholder"); //It should only be placeholder as we haven't made any changes yet
})