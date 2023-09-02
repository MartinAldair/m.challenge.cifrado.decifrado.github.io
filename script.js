// Declaracion de variables
var regex = new RegExp("^([a-z ])+$");
var inputTexto = document.getElementById("inputTexto");
var inputTextoSalida = document.getElementById("inputTextoSalida");
var textoInfoEntrada = document.getElementById("textoInfoEntrada");
var textoInfoCopiar = document.getElementById("textoInfoCopiar");

(() => {
    inputTexto.addEventListener('input', (event) => {
        const inputTextoEncriptar = event.target.value;
        if (inputTextoEncriptar != null && inputTextoEncriptar != ""){
            textoInfoEntrada.textContent="Solo con letras minúsculas y sin acentos ni caracteres especiales";
            let textoEncriptarValido = regex.test(inputTextoEncriptar);
            if(textoEncriptarValido){
                textoInfoEntrada.style.color="black";
            } else {
                textoInfoEntrada.style.color="red";
           }
        } else {
            textoInfoEntrada.style.color="red";
            textoInfoEntrada.textContent="Texto requerido";
        }
    });
    inputTextoSalida.addEventListener('input', (event) => {
        const inputTextoCopiarSalida = event.target.value;
        if (inputTextoCopiarSalida != null && inputTextoCopiarSalida != ""){
            textoInfoCopiar.style.display="none";
        } else {
            textoInfoCopiar.style.display="block";
            textoInfoCopiar.textContent="Texto requerido";
        }
    });
})();

const handledEncriptarTexto = () => {
    var texto = document.getElementById("inputTexto").value;
    if (texto != null && texto != "") {
        if (regex.test(texto)) {
            textoInfoEntrada.style.color="black";
            inputTextoSalida.value = encriptarTexto(texto);
            inputTexto.value = null;
            textoInfoCopiar.style.display="none";
        } else {
            textoInfoEntrada.style.color="red";
        }
    } else {
        textoInfoEntrada.style.color="red";
        textoInfoEntrada.textContent="Texto requerido";
    }
}

const handledDesencriptarTexto = () => {
    var texto = document.getElementById("inputTexto").value;
    if (texto != null && texto != "") {
        inputTextoSalida.value = desencriptarTexto(texto);
        inputTexto.value = null;
        textoInfoCopiar.style.display="none";
    } else {
        textoInfoEntrada.style.color="red";
        textoInfoEntrada.textContent="Texto requerido";
    }
}

const handledCopiarTexto = () => {
    var copiarTexto = document.getElementById("inputTextoSalida").value; // obtiene el texto
    if (copiarTexto != null && copiarTexto != "") {
        inputTexto.value = copiarTexto;
        inputTextoSalida.value = null;
        textoInfoEntrada.style.display="block";
        textoInfoEntrada.style.color="black";
        textoInfoEntrada.textContent="Solo con letras minúsculas y sin acentos ni caracteres especiales";
    } else {
        textoInfoCopiar.style.display="block";
        textoInfoCopiar.textContent="Texto requerido";
    }
}

const encriptarTexto = (texto)=> {
    var textoEncriptado = texto.replace(/e/gi,'enter');
    textoEncriptado = textoEncriptado.replace(/i/gi, "imes");
    textoEncriptado = textoEncriptado.replace(/a/gi, "ai");
    textoEncriptado = textoEncriptado.replace(/o/gi, "ober");
    textoEncriptado = textoEncriptado.replace(/u/gi, "ufat");
    return textoEncriptado;
}

const desencriptarTexto = (texto) => {
    var textoDesencriptado = texto.replace(/enter/gi, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/gi, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/gi, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/gi, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/gi, "u");
    return textoDesencriptado;
}