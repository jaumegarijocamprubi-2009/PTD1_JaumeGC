const prompt = require("prompt-sync")()

let tesoro= Math.floor(Math.random() *50 +1)


let i=0
let acert=false

while(i<5 && acert===false){
    let intents=0
    do{
        intents=Number(prompt("Introdueix un nombre"));
        if(intents>50 || intents<1 || isNaN(intents)){
            console.log("Torna a introduir un nombre")
        }
    }
    while(intents>50 || intents<1 || isNaN(intents));
    if(intents===tesoro){
        console.log("Has guanyat al x intent!");
        acert=true
    }
    else{
        if(intents<tesoro){
            console.log("més gran");
        }
        else{
        console.log("més petit");
        }
    }
    i++
}