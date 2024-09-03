const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage ainepunktide arv: `, ainepunktid => 
rl.question(`Sisestage nädalate arv: `, nädalateArv => { 
    function ajakulu(ainepunktid, nädalateArv) { 
        let tunnid = ainepunktid * 26;
        let ajakulu = tunnid / nädalateArv;
        ajakulu = Math.round(ajakulu);
        console.log(ajakulu);
        }
        ajakulu(Math.round(ainepunktid), Math.round(nädalateArv));
    rl.close();
}));