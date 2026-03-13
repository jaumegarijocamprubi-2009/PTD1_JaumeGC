//Repte 1: Codi erroni
//Sense usar l’ordinador, identifica els errors i explica què falla. Arregla-ho
//Després, amb l’ordinador, identifica els errors al codi i afegeix un comentari amb l’explicació

// Quadrat de 4x4 d'asteriscs
let mida = 4;
let fila = "";

for (let i = 0; i < mida; i++) {
    for (let i = 0; i < mida; i++) {
        fila += "* ";
        console.log(fila);
    }
}

/*
Errors del codi:
1. Els dos bucles utilitzen la mateixa variable (i). El segon hauria de tenir una altra variable, per exemple j.
2. El console.log està dins del bucle interior, així que imprimeix la fila cada vegada que s’afegeix un asterisc.
3. La variable fila no es reinicia a cada fila, així que els asteriscs es van acumulant.
 */
console.log("--------------------------------------------------------------")

// Versió corregida
let mida2=4
for(let i=0; i<mida2; i++){
    let fila2=""
    for(let j=0; j<mida2; j++){
        fila2+= "*";
    }
    console.log(fila2);
}

