const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kas soovite istekohta valida ("ise") või loosida ("loos")? `, (istekohaLoosIse) => {
    if (istekohaLoosIse == "loos") {
        const gambling = Math.random();
        if (gambling <= 0.33) {
            console.log('Istekoht loositi. Aknakoht');
        } else {
            console.log('Istekoht loositi. Vahekäigukoht');
        } 
        rl.close();
    } else if (istekohaLoosIse == "ise") {
        rl.question(`Kas soovite istuda akna ääres ("aken") või mitte ("muu")? `, (istekohaAkenMuu) => {
            if (istekohaAkenMuu == "aken") {
                console.log('Valisite ise. Aknakoht');
            } else if (istekohaAkenMuu == "muu") {
                console.log('Valisite ise. Vahekäigukoht');
            }
            rl.close() 
        })  
    }  
}) 