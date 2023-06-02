const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

/*
la letra e es convertida para enter
la letra i es convertida para imes
la letra a es contervitda para ai
la letra o es convertida para ober
la letra u es convertida para ufat
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}



function encriptar(stringEncriptador){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptador.includes(matrizCodigo[i][0])){
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    
    }
    return stringEncriptador
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
}

function desencriptar(stringDesencriptador){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptador = stringDesencriptador.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptador.includes(matrizCodigo[i][1])){
            stringDesencriptador = stringDesencriptador.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    
    }
    return stringDesencriptador
}



