
//THIS CODE WILL REVERSE ANY STRING INPUT IN TERMINAL


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function (name) {

    let reversed = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reversed += name[i];
    }

    console.log("Reversed name: " + reversed);

    rl.close();
});
