// // We need to sum big numbers and we require your help.

// // Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {

    a = a.toString();
    b = b.toString();

    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;

    let carry = 0;
    let result = '';


    for (let i = a.length - 1; i >= 0; i--) {

        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }


    if (carry) {
        result = carry + result;
    }

    return result;
}