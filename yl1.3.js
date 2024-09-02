// Saab kasutaja sisendi ning matemaatika
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage astme alus `, astendatav => 
rl.question(`Sisestage astendaja `, astendaja => { 
  console.log(astendatav ** astendaja );
  rl.close();
}));