// Problem 1: Multiples of 3 or 5:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
/********************* ************************************************************************************************************/

function multiplesOf3Or5(number) {
    let sum = 0;
    let MAX = number + 1;

    for (let i = 3; i < MAX; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

multiplesOf3Or5(10);