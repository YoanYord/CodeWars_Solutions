// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function (number) {
    let string = number.toString();
    let parts = string.split('.');
    let integerPart = parseInt(parts[0]);

    if (parts.length > 1) {
        let decimalPart = parseInt(parts[1][0]);

        if (decimalPart >= 5) {
            return integerPart + 1;
        }
    }
    return integerPart;
};

Math.ceil = function (number) {
    let string = number.toString();
    let parts = string.split('.');
    let integerPart = parseInt(parts[0]);
    return parts.length === 1 || parseInt(parts[1]) === 0 ? integerPart : integerPart + 1;

};

Math.floor = function (number) {
    let string = number.toString();
    let parts = string.split('.');
    let integerPart = parseInt(parts[0]);

    return integerPart;
};

