// Starting array
let array = [28, 43, 30, -12, 4, 0, 12]

// Write your solution below:
let absValIdentical = false;
for(let i = 0; i < array.length; ++i) {
    let numToFind = array[i] * -1;
    for(let j = i + 1; j < array.length; ++j) {
        if(array[j] === numToFind) {
            absValIdentical = true;
            break;
        }
    }
    if(absValIdentical) {
        break;
    }
}

if(absValIdentical) {
    console.log(true);
} else {
    console.log(false);
}