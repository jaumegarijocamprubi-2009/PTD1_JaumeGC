//Repte 1 – Evitar if innecessari amb booleans
let edat = 20;
let esMajor = edat >= 18;
console.log(esMajor);

//Repte 2 – Combinar condicions
let plou = true;
let tincParaigua = true;

if (plou && tincParaigua) {
    console.log("Puc sortir al carrer sense banyar-me.");
}

//Repte 3 – Early return per evitar nesting
function processarLogin(usuariLoguejat, usuariRol) {
    if (!usuariLoguejat) return;
    if (usuariRol !== "admin") return;
    console.log("Benvingut, administrador.");
}

//Repte 4 – Eliminar else innecessari després de return
function comprovarNota(n) {
    if (n >= 5) {
        return "Aprovat";
    }
    return "Suspès";
}
//Repte 5
let actiu = true;
let nivell = 10;

if (!actiu) {
    console.log("Compte desactivat.");
} else if (nivell >= 10) {
    console.log("Pots passar al següent món.");
} else {
    console.log("Nivell insuficient.");
}
