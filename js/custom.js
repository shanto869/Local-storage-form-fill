// practice problem 1
console.log((!![] == !!true))


// practice problem 2
console.log(!!true === !!'true')


// problem 3
const checkNumber = (number) => {
    if (!isNaN(number)) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(checkNumber(4));
// console.log(checkNumber('jejjhjhsh'));

// practice problem 3
const operation = (num1, num2, operationName) => {
    if (operationName === 'add') {
        return (num1 + num2);
    }
    else if (operationName === 'subtract') {
        return (num1 - num2);
    }
    else if (operationName === 'multiply') {
        return (num1 * num2)
    }
    else if (operationName === 'divide') {
        return (num1 / num2)
    }
    else {
        return ('Invalid Operation')
    }
}

const result = operation(30, 20, 'multiply');
// console.log(result)

// practice problem 2
let storeFalsyValue = !(true);

if (storeFalsyValue) {
    console.log(`Nothing to show!`);
}
else {
    console.log(`You are amazing!`);
}

