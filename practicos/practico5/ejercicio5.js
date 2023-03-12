const readlineSync = require("readline-sync");

const maxNumber = () => {
    let max_number = Number(
        readlineSync.question("pls enter a number:"))

    for (let i = 0; i<2; i++ ) {
        let number = readlineSync.question("pls enter a number:")
        if (number >= max_number){
            max_number = number;
        };
    }
    return max_number
}

console.log(maxNumber())