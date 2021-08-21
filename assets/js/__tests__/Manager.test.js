//first we bring in our Manager constructor
const Manager = require('../constructors/manager');

test('creates our Manager object', () => {
    const manager = new Manager('Test', 30, 'test@gmail.com', 3);

    //we're testing to see if the office number is actually a number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks to see if manager role is correct', () => {
    const manager = new Manager('Test', 30, 'test@gmail.com');

    //checks the manager role is "Manager" and not "placeholder"
    expect(manager.getRole()).toEqual("Manager");
})