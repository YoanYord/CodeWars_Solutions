// Given a random non-negative number, you have to 
// return the digits of this number within an array in reverse order.
function digitize(n) {
    let arr = [];
    arr = n.toString().split('').map(Number);
    return arr.reverse();
}
