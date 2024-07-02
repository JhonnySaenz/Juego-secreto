let numeroSecreto = generarNumeroSecreto;
let intentos = 1;

console.log(numeroSecreto);


function asignarTextoElemento() {
    let elementoHTML = document.querySelector("h1");
    elementoHTML.innerHTML = "Juego del numero secreto.";
    return;
}

function verificarIntento( ) {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value)

    if (numeroDeUsuario === numeroSecreo) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "Vez" : "Veces"}`);
        document.getElementById("reiniciar").removeAttribute("disable");


    }else {
        //El susuario no acierta 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else; {
             asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario");
    valorCaja.valu = "";
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1
    return numeroSecreto;
}

asisgnarTextoElemento("h1", "juego del numero secreto!");
asisgnarTextoElemento("p", "Indica un numro del 1 al 100");