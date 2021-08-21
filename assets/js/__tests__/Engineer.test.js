//first we bring in our engineer
const { TestWatcher } = require('jest');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Engineer = require('../constructors/engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Test', 30, 'test@gmail.com', 'test06');

    //here we are testing to make sure the github username is a string
    expect(engineer.github).toEqual(expect.any(String));
});


test('gets the value of github from the engineer data', () => {
    const engineer = new Engineer('Test', 30, 'test@gmail.com', 'test06');

    //toString is a method that returns the string of an item inside of an object. So here we are returning the value of "github" in string form.
    //stringContaining matches the received value of the string inside its parenthasises "()" if it is the exact same string value that it is expecting
    //So what we are saying here is the returned value of getGithub() should match the value of stringContaining(), which in turn is matching the value of engineer.github.toString as long as it is the string it is expecting
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of engineer', () => {
    const engineer = new Engineer('Test', 30, 'test@gmail.com', 'test06');

    //Here we are checking if the role has been changed from "placeholder" to "Engineer"
    expect(engineer.getRole()).toEqual("Engineer");
})