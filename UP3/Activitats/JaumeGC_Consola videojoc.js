console.log("Quantes partides hem guanyat?");
var guanyades= Number(prompt("Quantes partides hem guanyat?"));
var perdudes=Number(prompt("Quantes partides hem perdut?"));

var total=guanyades + perdudes;
var percentatge= (guanyades/total) *100;
var booleano= guanyades>(total/2);
var necessaries= Math.ceil ((0.75 *total) -guanyades);

console.log("Total partides jugades: " +total);
