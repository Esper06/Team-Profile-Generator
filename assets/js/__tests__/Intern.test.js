//first we bring in our intern constructor
const Intern = require('../constructors/intern');

test('creates an Intern object', () => {
    const intern = new Intern('Test', 30, 'test@gmail.com', 'testSchool');

    //checks that the school data is in string form
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern('Test', 30, 'test@gmail.com', 'testSchool');

    //checks to see if the school data in intern.school is what is should be. The way this works is explained in Engineer.test.js
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('checks to see if intern role is "Intern"', () => {
    const intern = new Intern('Test', 30, 'test@gmail.com', 'testSchool');

    //checks to see if the role for intern is "Intern" and not "placeholder"
    expect(intern.getRole()).toEqual("Intern");
})