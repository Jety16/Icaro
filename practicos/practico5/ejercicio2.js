const readlineSync = require("readline-sync");

const esVocal = (letter) => {
    letter = letter.toLowerCase()

    switch (letter){
        case 'a':
            console.log('Is a vocal yei!')
            break
        case 'e':
            console.log('Is a vocal yei!')
            break
        case 'i':
            console.log('Is a vocal yei!')
            break
        case 'o':
            console.log('Is a vocal yei!')
            break
        case 'u':
            console.log('Is a vocal yei!')
            break
        default:
            console.log('nope, is not a vocal')
    }
}


const letter = readlineSync.question("pls, enter a vocal:  ");
esVocal(letter)