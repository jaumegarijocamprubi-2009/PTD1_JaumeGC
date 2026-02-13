//-----SECTOR 1-------

function obtenirSector1(esAdministrador, antivirusActiu, actualitzacio) {
    if (esAdministrador == true) {
        return 7;
    }else{
        if (antivirusActiu == true && actualitzacio == true) {
            return 7;
        } else {
            return 3;
        }
    }
}

// -------- SECTOR 2 --------
function colorSegonsCognom(cognom) {
    primera = cognom.charAt(0).toUpperCase();
    if (primera >= 'A' && primera <= 'D') {
        return "blau";
    } else if (primera >= 'E' && primera <= 'M') {
        return "verd";
    } else if (primera >= 'N' && primera <= 'Q') {
        return "taronja";
    } else {
        return "groc";
    }
}
function obtenirSector2(color) {
    if (color == "verd") {
        return 5;
    }
    else if (color == "blau") {
        return 8;
    }
    else if (color == "groc") {
        return 2;
    }
    else {
        return 1;
    }
}

// -------- SECTOR 3 --------
function obtenirSector3(estaConvidat, edat) {
    if (estaConvidat == false) {
        return 0;
    }
    else if (edat < 18) {
        return 4;
    }
    else {
        return 9;
    }
}

// -------- SECTOR 5 --------
function obtenirSector5(online, capacitatTotal, usActual) {
    if (online == false) {
        return 0;
    } else if ((usActual * 100 / capacitatTotal) >= 90) {
        return 1;
    } else {
        return 4;
    }
}

// -------- PROGRAMA PRINCIPAL --------
const DIGIT4 = 2
let esAdministrador = false;
let antivirusActiu = true;
let actualitzacio = false;
let cognom = "Garijo";
let estaConvidat = true;
let edat = 15;
let online = true;
let capacitatTotal = 500;
let usActual = 450;

// Cridar funcions
let digit1 = obtenirSector1(esAdministrador, antivirusActiu, actualitzacio);
let color = colorSegonsCognom(cognom);
let digit2 = obtenirSector2(color);
let digit3 = obtenirSector3(estaConvidat, edat);
let digit5 = obtenirSector5(online, capacitatTotal, usActual);

// Formar Clau Mestra
let clauMestra = digit1 + digit2 + digit3 + DIGIT4 + digit5;

// Mostrar resultat de la Clau Mestra segons el DIGIT4
console.log("LA CLAU MESTRA ÉS: " + clauMestra);