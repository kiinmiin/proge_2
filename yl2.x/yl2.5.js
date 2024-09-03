const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage kirja suurus: `, (kirjaSuurus) => {
rl.question(`Sisestage kirja teema pealkiri: `, (kirjaPealkiri) => { 
rl.question(`Kas kirjaga on kaasas fail: `, (kirjaFail) => { 
let kirjaSuurusUus = parseFloat(kirjaSuurus)
if (kirjaSuurusUus > 1 || kirjaPealkiri == '' || kirjaFail == 'ei') {
  console.log('Kiri on spamm')
      } else {
        console.log('Kiri ei ole spamm')
      }
      rl.close(); 
    }) 
  }) 
}) 