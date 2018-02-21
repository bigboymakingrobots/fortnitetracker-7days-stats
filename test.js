const fnt = require('./index.js');

fnt.getStats("Ƒormal", "pc", (err, result) => {
    if(err){
        console.log(err.message);   // player not found
    }else{
        console.log("Wins in the last 7 days: " + result.wins);
    }
});
