let cargador = ["pium1!", "pium2!", "pium3!", "pium4!", "pium5!", "pium6!", "pium7!"];

function chauchat (cargador) {
    let piumNumber = 0;
    for (let i = 0; i < cargador.length; i++) {
        if (Math.random() <= 0.8) { // probabilidad de disparo
            console.log("Illo me he quedado pillado!"); // pillada
            break;
        } else if (piumNumber % 3 === 0) {
            console.log(" ");
            piumNumber = 0;
        } else {
            console.log(cargador[i]);
            piumNumber += 1; // num de disparos consecutivos
        }
    }
}

chauchat(cargador);