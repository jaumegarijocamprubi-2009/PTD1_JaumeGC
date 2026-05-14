/**
 * Codi base -> Connecta amb l'API oficial de Rick & Morty
 * @returns {Promise<Array>} Retorna un array amb personatges
 */
async function obtenirPersonatges() {
    try {
        const resposta = await fetch("https://rickandmortyapi.com/api/character");
        const dades = await resposta.json(); // Converteix la resposta a format JSON
        return dades.results; // Array de personatges
    } catch (error) {
        console.error("Error de connexió:", error);
    }
}

/*
Instruccions: només has de completar el codi marcat amb TODOs, no has de modificar res més. Pots afegir variables o funcions auxiliars si ho necessites.
1. Obtenir el nom del tercer personatge de l'array de personatges.
2. Mostrar el nom de tots els personatges seguit del seu estat (viu, mort o desconegut).
3. Mostrar el nom de cada personatge seguit del nom del seu planeta d'origen.
4. Mostrar quants personatges vius hi ha a l'array de personatges.
 */
async function principal() {
    // obtenirPersonatges és una funció async que retorna una Promise.
    // Necessitam 'await' per obtenir l'array real de personatges
    const personatges = await obtenirPersonatges();

    //comprovar que hi ha personatges
    //Comprovam que existeix l'array i que té elements
    if (personatges && personatges.length > 0) {

        //Si hi ha almenys 3 personatges, mostrar el nom del tercer
        if (personatges.length >= 3) {
            // Mostram el nom del tercer personatge
            console.log("El nom del tercer personatge és: " + personatges[2].name);
        }

        //Nom de tots els personatges seguit del seu estat
// Recorrem tots els personatges
        for (const personatge of personatges) {
            // Variable per guardar l'estat
            let estat = "";

            // Si està viu
            if (personatge.status === "Alive") {
                estat = "viu";
            }

            // Si està mort
            else if (personatge.status === "Dead") {
                estat = "mort";
            }

            // Si és desconegut
            else {
                estat = "ni viu ni mort";
            }

            //Mostrar resultats
            console.log("El personatge " + personatge.name + " està " + estat + ".");
        }

        //Nom de cada personatge seguit del nom del seu planeta d'origen
// Recorrem tots els personatges
        for (const personatge of personatges) {
            // Mostram el planeta d'origen
            console.log("El personatge " + personatge.name + " és originari de " + personatge.origin.name + ".");
        }


        //Personatges vius
// Cream un array només amb humans vius
        let humansVius=[]

        for(let i=0; i<personatges.length; i++){
          if(personatges[i].status==="Alive" && personatges[i].species==="Human"){
              humansVius.push(personatges[i]);
          }
        }

        //const humansVius = personatges.filter(personatge => personatge.species === "Human" && personatge.status === "Alive");
// Mostram quants n'hi ha
        console.log(humansVius);
        console.log("Nombre de personatges humans vius: " + humansVius.length);
    }

//Crida a la funció principal
//Executam la funció principal
}
principal();
