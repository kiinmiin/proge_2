const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage ringide arv: `, ringideArv => {
    let porganditeArv = 0;
    for (let number = 1; number <= ringideArv; number++) {
        if (number % 2 === 0) {
            porganditeArv += number;
        } 
    }
    console.log(`Porgandite koguarv on ${porganditeArv}`)
    rl.close(); 
}) 