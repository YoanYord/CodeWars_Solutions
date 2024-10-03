// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
    let areaOne = numbers.slice(0, 3).join('');
    let areaTwo = numbers.slice(3, 6).join('');
    let areaThree = numbers.slice(6, 10).join('');
    return (`(${areaOne}) ${areaTwo}-${areaThree}`);

}