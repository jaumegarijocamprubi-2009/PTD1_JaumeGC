const prompt = require("prompt-sync")();
function repetirTres(text) {
    return text + '_' + text + '_' + text;

}
function eliminaEspais(text) {
    return text.replaceAll(' ' , "");


}
function cincPrimeres(text) {
    return text.substring(0,5);
}
//EXERCICI 1

let Nom=prompt("Com et dius? ");
let apellido1=prompt("Primer llinatge ");
let apellido2=prompt("Segon llinatge ");

//2a
console.log(Nom + " "+ apellido1 + " "+ apellido2);
//--------------------------------------------------------
//2b
console.log(Nom.toUpperCase() + " "+ apellido1.toUpperCase() + " "+ apellido2.toUpperCase());
//-------------------------------------------------------------------------------------------------
//2c
console.log(Nom.toLowerCase()+ " "+apellido1.toLowerCase()+ " "+apellido2.toLowerCase());
//-------------------------------------------------------------------------------------------------
//2d
console.log(Nom.length+apellido1.length+apellido2.length);
//-------------------------------------------------------------------------------------------------
//2e
console.log(Nom.substring(0,3));
//-------------------------------------------------------------------------------------------------
//2f
console.log(apellido1.substring(apellido1.length-3));
//-------------------------------------------------------------------------------------------------
//2g
console.log(apellido2.substring(3,4));
//console.log(apellido2.charAt(3));
//-------------------------------------------------------------------------------------------------
//2h
console.log(Nom + apellido1 + apellido2);
//-------------------------------------------------------------------------------------------------
//3.
let usuari=Nom + apellido1 + apellido2;
usuari=usuari+apellido1.substring(0,3);

usuari=usuari+apellido2.substring(apellido2.length-2);
usuari=usuari.toLowerCase()
console.log(usuari)

//Extensió (opcional)
let salida="Voy a ir al cine";
salida=salida.substring(0,salida.length/2);
console.log(salida);

salida= cincPrimeres(salida);
console.log(salida);

salida= eliminaEspais(salida);
console.log(salida);

salida= salida.replace("Voya", "mesa");
console.log(salida);

console.log(repetirTres(salida));