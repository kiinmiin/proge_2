const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Mitu pöialpoissi tahab õunu: `, õunaPöial => {
let kõikÕunad = 14
if (õunaPöial > 0 && õunaPöial < 7) {
    for (let number = 0; number < õunaPöial; number++) {
        if (Math.random() > 0.5) {
            kõikÕunad -= 2
            console.log(2)
            } else {
                kõikÕunad -= 1
                console.log(1)
            } 
        } 
    }
    console.log(`Lumivalgekesele jäi ${kõikÕunad}`)
    rl.close(); 
}) 