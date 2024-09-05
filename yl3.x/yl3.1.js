const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage mitu korda äratada: `, äratusteArv => {
if (äratusteArv > 0) {
    for (let number = 0; number < äratusteArv; number++) {
        console.log('Tõuse ja sära!')    
    } 
    } 
    rl.close();
})