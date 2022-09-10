
function PrimeNumbers(n) {
    if (!PrimeNumbers._array) {
        PrimeNumbers._array = [];
    }

    let numbers = 2;

    while (PrimeNumbers._array.length < n) {
        let countDivider = 0;
        for (let i = 1; i <= numbers; i++) {
            if (numbers % i === 0) {
                countDivider ++;
            }
        }

        if (countDivider === 2) {
            PrimeNumbers._array.push(numbers);
        }

        numbers++;
    }
    return PrimeNumbers._array;
}

console.time();
console.log(PrimeNumbers([process.argv[2]]));
console.timeEnd();