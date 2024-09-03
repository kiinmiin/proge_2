const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage enda vanus: `, vanus => { 
    rl.question(`Sisestage enda sugu (M, m või N, n): `, sugu => { 
        rl.question(`Sisestage enda treeningu tüüp (1, 2 või 3): `, treeninguTüüp => {
            maxMeesteSagedus = 220
            maxNaisteSagedus = 206  
            // function sageduseKalk(vanus, maxMeesteSagedus, maxNaisteSagedus) {
                let mSagedus = maxMeesteSagedus - vanus
                let nSagedus = maxNaisteSagedus - Math.round((vanus * 0.88))
                
                
            
            if (sugu == 'M' || sugu == 'm') {
                // sageduseKalk(vanus, maxMeesteSagedus)
                let sagedusEnneTrenni = mSagedus
                    if (treeninguTüüp == 1) {
                        let sagedusPärastTrenni1 = Math.round(sagedusEnneTrenni * 0.5)
                        let sagedusPärastTrenni2 = Math.round(sagedusEnneTrenni * 0.7)
                        console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`) 
                        } 
                    else if  (treeninguTüüp == 2) {
                        let sagedusPärastTrenni1 = Math.round(sagedusEnneTrenni * 0.7)
                        let sagedusPärastTrenni2 = Math.round(sagedusEnneTrenni * 0.8)
                        console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`) 
                        } 
                    
                    else {
                        let sagedusPärastTrenni1 = Math.round(sagedusEnneTrenni * 0.8)
                        let sagedusPärastTrenni2 = Math.round(sagedusEnneTrenni * 0.87)
                        console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`) 
                        } 
                        // console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`)    
                }
            if (sugu == 'N' || sugu == 'n') {
                // sageduseKalk(vanus, maxNaisteSagedus)
                let sagedusEnneTrenni = nSagedus
                    if (treeninguTüüp == 1) {
                        let sagedusPärastTrenni1 = Math.round(sagedusEnneTrenni * 0.5)
                        let sagedusPärastTrenni2 = Math.round(sagedusEnneTrenni * 0.7)
                        console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`) 
                        } 
                    else if  (treeninguTüüp == 2) {
                        let sagedusPärastTrenni1 = Math.round(sagedusEnneTrenni * 0.7)
                        let sagedusPärastTrenni2 = Math.round(sagedusEnneTrenni * 0.8)
                        console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`) 
                        } 
                        
                    else {
                        let sagedusPärastTrenni1 = Math.round(sagedusEnneTrenni * 0.8)
                        let sagedusPärastTrenni2 = Math.round(sagedusEnneTrenni * 0.87)
                        console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`) 
                        } 
                    //console.log(`Pulsisagedus peaks olema vahemikus ${sagedusPärastTrenni1} kuni ${sagedusPärastTrenni2}.`)
                } 
                rl.close();
        })
    })
}) 