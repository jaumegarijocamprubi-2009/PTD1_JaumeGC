const prompt = require("prompt-sync")()

let medida=0

do{
    medida= Number(prompt("Quina es la medida"))
    if(medida<=0 || isNaN(medida)){
        console.log("Error!");
    }
}
while(medida<=0 || isNaN(medida));

for(let i=0; i<medida; i++){
    let linia=""
    for(let j=0; j<medida; j++){

        if(i%2===0) {
            if (j % 2 === 0) {
                linia += "x"
            } else {
                linia += "O"

            }
        }
        else{
            if(j%2===0){
                linia+="O"
            }
            else{
                linia+= "x"
            }
        }
    }
    console.log(linia);
}

