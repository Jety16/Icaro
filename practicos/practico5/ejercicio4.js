const readlineSync = require("readline-sync");

const sumaArreglo = (array) => {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
}

const createArray = () => {
    const array = []
    let run = true
    let input = ''
    while (run){
        input = readlineSync.question("enter a number to add to the array or write stop to stop adding items to the array: ")
        if (input === "stop"){
            run = false
        }
        else {
            array.push(Number(input))
        }

    }
    return array
}

console.log("the sum of the valuos of the array is:", sumaArreglo(createArray()))