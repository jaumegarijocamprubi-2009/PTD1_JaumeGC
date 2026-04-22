let pelicules = ["Inception", "The Matrix", "Avatar"];

// Mostra array
console.log(pelicules);

// Segona pel·lícula
console.log(pelicules[1]);

// Canvia la primera
pelicules[0] = "Interstellar";

// Afegeix al principi
pelicules.unshift("Titanic");

// Mostra llista
console.log(pelicules);

// Afegeix al final
pelicules.push("Gladiator");

// Mostra llista
console.log(pelicules);

// Elimina la primera
let eliminada = pelicules.shift();
console.log("Eliminada:", eliminada);
console.log(pelicules);

// Missatge final
console.log(
    "La meva llista té " + pelicules.length + " pel·lícules i la primera és " + pelicules[0]
);

//Repte 2: Ordenant la classe
let alumnes = [
    "Marc",
    "Marta",
    "Anastasia",
    "Jaume",
    "Uriel",
    "Marc"
]

console.log(alumnes.length);
console.log(JSON.stringify(alumnes));

alumnes= alumnes.sort();
console.log(alumnes);

console.log(alumnes.join("->"));

//Repte 3. Cua de la pexeteria
let clients=["Client 1" , "Client 2" , "Client 3"];
console.log(clients);

clients.push("Client 4");
console.log(clients);

clients.shift()
console.log(clients);

console.log(clients.length)

clients.shift()
console.log(clients)

clients.push("Client 5", "Client 6", "Client 7");
console.log(clients)

for(let i=0; i<clients.length; i++){
    console.log("El client " + clients[i] + " està a la posició " + (i+1));
}

//Repte 4: Llista de números
function COMPARAR(a,b){
    if(a>b){
        return 1
    }
    if(b>a){
        return -1
    }
    return 0
}

let numeros = [23, 5, 87, 1, 45];

// separada per comes
console.log(numeros.join(","));

// ordenar
numeros.sort();
console.log(numeros);

// afegir 100 i 11
numeros.push(100, 11);

// tornar a ordenar
numeros.sort();
// Ordena com a text (ordre alfabètic), pot deixar els números mal ordenats

console.log(numeros);

// ordenar correctament de menor a major
numeros.sort(COMPARAR);
// Ordena numèricament de menor a major (ordre correcte)

console.log(numeros);

//Els números no s’ordenen correctament perquè sort() ordena els valors com si fossin text (strings) i no com a números.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
