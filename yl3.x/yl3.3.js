const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Täringute arv: `, täringuteArv => {
if (täringuteArv > 0) {
    for(let number = 0; number < täringuteArv; number++) {
        let täringuSpin = Math.round(Math.random() * 6)
        if (täringuSpin < 0.08) {
            täringuSpin += 1
            console.log(täringuSpin)
            } else {
                console.log(täringuSpin)
            }  
        } 
    }
    rl.close(); 
}) 