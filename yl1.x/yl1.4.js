const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage oma nimi: `, nimi => 
rl.question(`Sisestage lubatud kiirus (km/h): `, lubatudKiirus => 
rl.question(`Sisestage tegelik kiirus (km/h): `, tegelikKiirus => { 
    function trahviKalk(lubatudKiirus, tegelikKiirus) { 
        let ületatudKiirus = tegelikKiirus - lubatudKiirus;
        let trahv = ületatudKiirus * 3;
        trahv = Math.min(190, trahv);
        console.log(`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} eurot.`);
        }
        trahviKalk(parseInt(lubatudKiirus), parseInt(tegelikKiirus));
    rl.close();
})));