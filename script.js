/**
 * Declaracion de variables globales
 */
var patron = "^([abcdefghijklmnñopqrstuvwxyz ])+$";
/**
 * Explicacion del contenido de la variable patron:
 * ^ Indica el principio de una cadena
 * ( Indica el principio del agrupamiento de parte de una expresion
 * [ Indica el principio del conjunto de caracteres de la expresion
 * abcdefghijklmnñopqrstuvwxyz Conjunto de cadena de caracteres que 
 * indica la condicion que solo admite solo letras minusculas
 * espacio permite el espacio en blanco entre letras y/o palabras
 * ] Indica el final del conjunto de caracteres de la expresion
 * ) Indica el final del agrupamiento de parte de una expresion
 * + 1-n ocurrencias de la expresión
 * $ Indica el final de una cadena
 */
var regex = new RegExp(patron);
// Devuelve un objeto Element que representa un elemento HTML
var inputTexto = document.getElementById("inputTexto");
var inputTextoCopiar = document.getElementById("inputTextoCopiar");
var textoInfoEntrada = document.getElementById("textoInfoEntrada");
var textoInfoCopiar = document.getElementById("textoInfoCopiar");

(() => {
    /**
     * Evento del elemento <textarea> con el id inputTexto, donde se gestiona
     * la validacion de inputTexto
     */
    inputTexto.addEventListener('input', (event) => {
        const inputTextoEncriptar = event.target.value;
        // Validacion del campo inputTexto si es nulo o vacio
        if (inputTextoEncriptar != null && inputTextoEncriptar != ""){
            textoInfoEntrada.textContent="Solo con letras minúsculas y sin acentos ni caracteres especiales";
            // Validacion del campo inputTexto que solo incluya letras minusculas, 
            // letras sin acentos ni caracteres especiales.
            if(regex.test(inputTextoEncriptar)){
                textoInfoEntrada.style.color="black";
            } else {
                textoInfoEntrada.style.color="red";
           }
        } else {
            textoInfoEntrada.style.color="red";
            textoInfoEntrada.textContent="Texto requerido";
        }
    })
    /**
     * Evento del elemento <textarea> con el id inputTextoCopiar, donde se gestiona
     * la validacion de inputTextoCopiar
     */
    inputTextoCopiar.addEventListener('input', (event) => {
        const inputTextoCopiarSalida = event.target.value;
        // Validacion del campo inputTextoCopiar si es nulo o vacio
        if (inputTextoCopiarSalida != null && inputTextoCopiarSalida != ""){
            textoInfoCopiar.style.display="none";
        } else {
            textoInfoCopiar.style.display="block";
            textoInfoCopiar.textContent="Texto requerido";
        }
    })
})()

/**
 * Metodo de tipo evento para encriptar texto
 */
const handledEncriptarTexto = () => {
    var texto = document.getElementById("inputTexto").value; // obtiene el texto
    // Validacion del campo inputTexto si es nulo o vacio
    if (texto != null && texto != "") {
        // Validacion del campo inputTexto que solo incluya letras minusculas, 
        // letras sin acentos ni caracteres especiales.
        if (regex.test(texto)) {
            textoInfoEntrada.style.color="black";
            inputTextoCopiar.value = encriptarTexto(texto);
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

/**
 * Metodo de tipo evento para desencriptar texto
 */
const handledDesencriptarTexto = () => {
    var texto = document.getElementById("inputTexto").value; // obtiene el texto
    // Validacion del campo inputTexto si es nulo o vacio
    if (texto != null && texto != "") {
        inputTextoCopiar.value = desencriptarTexto(texto);
        inputTexto.value = null;
        textoInfoCopiar.style.display="none";
    } else {
        textoInfoEntrada.style.color="red";
        textoInfoEntrada.textContent="Texto requerido";
    }
}

/**
 * Metodo de tipo evento para copiar texto y pegarlo a nivel codigo en el componente visual
 * <textarea> con el id inputTexto
 */
const handledCopiarTexto = () => {
    var copiarTexto = document.getElementById("inputTextoCopiar").value; // obtiene el texto
    // Validacion del campo inputTextoCopiar si es nulo o vacio
    if (copiarTexto != null && copiarTexto != "") {
        inputTexto.value = copiarTexto;
        inputTextoCopiar.value = null;
        textoInfoEntrada.style.display="block";
        textoInfoEntrada.style.color="black";
        textoInfoEntrada.textContent="Solo con letras minúsculas y sin acentos ni caracteres especiales";
    } else {
        textoInfoCopiar.style.display="block";
        textoInfoCopiar.textContent="Texto requerido";
    }
}

/**
 * Metodo que retorna el dato de tipo String encriptada.
 * @param {texto} 
 * @returns 
 */
const encriptarTexto = (texto)=> {
    /** 
    * Para llevar acabo el encriptado del tipo de dato String, se implemento
    * el metodo replace(), el cual reemplaza los valores String con una, algunas
    * coincidencias de los siguientes patrones: e -> enter, i -> imes, a -> ai, 
    * o -> ober, u -> ufat; a una nueva cadena de caracteres.
    * Si el patron no coincide la cadena de caracteres (String), se conserva sin cambios.
    */
    var textoEncriptado = texto.replace(/e/gi,'enter');
    textoEncriptado = textoEncriptado.replace(/i/gi, "imes");
    textoEncriptado = textoEncriptado.replace(/a/gi, "ai");
    textoEncriptado = textoEncriptado.replace(/o/gi, "ober");
    textoEncriptado = textoEncriptado.replace(/u/gi, "ufat");
    return textoEncriptado;
}

/**
 * Metodo que retorna el dato de tipo String desencriptada.
 * @param {texto} 
 * @returns 
 */
const desencriptarTexto = (texto) => {
    /** 
    * Para llevar acabo el desencriptado del tipo de dato String, se implemento
    * el metodo replace(), el cual reemplaza los valores String con una, algunas 
    * o todas las coincidencias de los siguientes patrones: enter -> e, imes -> i, 
    * ai -> a, ober -> o, ufat -> u; a una nueva cadena de caracteres.
    * Si el patron no coincide la cadena de caracteres (String), se conserva sin cambios.
    */
    var textoDesencriptado = texto.replace(/enter/gi, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/gi, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/gi, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/gi, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/gi, "u");
    return textoDesencriptado;
}