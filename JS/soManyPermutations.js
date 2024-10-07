// Kata 4 Kyu
// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

function permutations(string) {

    let result = [];

    function generatePermurations(current, remaining) {
        if (remaining.length === 0) {
            result.push();
        }
        for (i = 0; i < remaining.length; i++) {
            let newCurrent = current + remaining[i];
            let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            generatePermurations(newCurrent, newRemaining);
        }
    }
    generatePermurations('', string);
    return result;
}

console.log(permutations('abc'));