const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.on('line', (input => {
    let letters = {};

    for (let letter of input) {
        if (letters[letter]) {
            console.log(input);
            return;
        }
        letters[letter] = true;
    }
}));