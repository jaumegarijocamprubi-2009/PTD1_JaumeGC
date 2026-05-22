// prompt-sync per poder escriure a la terminal
const prompt = require("prompt-sync")();

/**
 * Codi base -> Connecta amb l'API oficial de Harry Potter.
 * @returns {Promise<Array>} Retorna un array amb personatges
 */
async function obtenirPersonatges() {
    try {
        const resposta = await fetch("https://hp-api.onrender.com/api/characters");
        const dades = await resposta.json(); // Converteix la resposta a format JSON
        return dades; // Array de personatges
    } catch (error) {
        console.error("Error de connexió:", error);
    }
}

//Arreglar: Crear una funció adalt relacionat linia 29,30,31,32,33,34 i per parametre ficar les dades d'aquella llista corresponent.
function mostrarLlista(personajes) {
    for (let i = 0; i < personajes.length; i++) {
        let casa = personajes[i].house
        if (casa === "") {
            casa = "Sin casa"
        }
        console.log((i + 1) + ") nom: " + personajes[i].name + ", casa: " + casa);
    }
}

//Arreglar: Crear una funció adalt relacionat linia 29,30,31,32,33,34 i per parametre ficar les dades d'aquella llista corresponent.
function mostrarFitxa(personaje) {

    console.log("**** Fitxa de " + personaje.name + " ****");

    let casa = personaje.house
    if (casa === "") {
        casa = "Sin casa"
    }
    console.log("casa: " + casa);

    let actor = personaje.actor
    if (actor === "") {
        actor = "Desconocido"
    }
    console.log("actor: " + actor);

    let ancestry = personaje.ancestry
    if (ancestry === "") {
        ancestry = "Desconocido"
    }
    console.log("ancestro: " + ancestry);

    let varita = personaje.wand.wood
    if (varita === "") {
        varita = "Desconocido"
    }
    console.log("Fusta de la vareta: " + varita);
}

function cercarPersonatge(personajes) {
    let nombre = prompt("Introduce un nombre");

    for (const personaje of personajes) {
        if (personaje.name === nombre) {
            mostrarFitxa(personaje);
            break;
        }
    }
}

function filtreCases(personajes) {
    let casas=[]
    for(let i=0; i<personajes.length; i++){
        let casapersonaje=personajes[i].house;
        if(casapersonaje!==""){
            let encontrado=false
            for(let casa of casas){
                if(casa===casapersonaje){ //mira las casas de la array
                    encontrado=true
                }
            }
            if(encontrado===false){
                casas.push(casapersonaje)
            }
        }
    }
    console.log("Las casas disponibles son: " + casas.join(","));
    let filtrocasa=prompt("Que casa estas buscando")
    console.log("Los miembros de la casa " + filtrocasa + " son");
    for(let i=0; i<personajes.length; i++){
        if(personajes[i].house===filtrocasa){
            console.log(personajes[i].name)//mostrar todos los personajes
        }
    }
}

function censHogwarts(personajes) {
  let numeroestudiantes=0
    let numeroprofesores=0
    for(let personaje of personajes){
        if(personaje.hogwartsStudent===true){
            numeroestudiantes++
        }
        else{
            if(personaje.hogwartsStaff===true){
                numeroprofesores++
            }
        }
    }
    console.log("Numero de estudiantes: " + numeroestudiantes);
    console.log("Numero de profesores: " + numeroprofesores);
}

function cercadorAlies(personajes) {
    let alias=prompt("Introdueix un àlies");
    for(let i=0; i<personajes.length; i++){
        for(let altername of personajes[i].alternate_names){
            if(altername===alias){
                console.log("El alias " + alias + " corresponde al personaje " + personajes[i].name)
                return;
            }
        }
    }
    console.log("El alias " + alias + " no es ningun personaje conocido");

}

function buscarRaza(personajes){
    let buscarRaza=prompt("Escoge una raza")
    console.log("Los personajes de la raza " + buscarRaza + " son ")
    for(let personaje of personajes){
        if(personaje.species===buscarRaza){
            console.log(personaje.name);
        }
    }
}

function mostrarVivos(personajes){
    console.log("Los personajes vivos son ");
    for(let personaje of personajes){
        if(personaje.alive===true){
            console.log(personaje.name);
        }
    }
}

function sortirPrograma() {
    console.log("Saliendo!");
}

async function principal() {
    const personajes = await obtenirPersonatges();

// Cream una variable per guardar l'opció que escriu l'usuari
    let opcio = "";

// El programa repetirà el menú mentre l'opció NO sigui 6
    while (opcio !== "8") { //(!== significa no es igual a)

//Mostrar el títol del menu
        console.log("\n---------HARRY POTTER-----------");

//Opcions del menú:
        console.log("1.Llistat de personatges");
        console.log("2.Cerca de personatges");
        console.log("3.Filtre de cases");
        console.log("4.Cens de Hogwards");
        console.log("5.Cercador d'àlies");
        console.log("6.Buscador de raza");
        console.log("7.Mostrar personajes vivos");
        console.log("8.Sortir");

//Demanar a l'usuari que escolleixi una opció
        opcio = prompt("Escull una opció");

//Comprova quina opció a escrit l'usuari:
        switch (opcio) {

// Si escriu 1
            case "1":
                mostrarLlista(personajes);
                break;

//Si escriu 2
            case "2":
                cercarPersonatge(personajes);
                break;

//Si escriu 3
            case "3":
                filtreCases(personajes);
                break;

//Si escriu 4
            case "4":
                censHogwarts(personajes);
                break;

//Si escriu 5
            case "5":
                cercadorAlies(personajes);
                break;

//Si escriu 6
            case "6":
                buscarRaza(personajes);
                break;

//Si escriu 7
            case "7":
                mostrarVivos(personajes);
                break;

//Si escriu 8
            case "8":
                sortirPrograma();
                break;

// Si escriu qualsevol altra cosa
            default:
                console.log("Opció incorrecta");
        }
    }
}

principal();


