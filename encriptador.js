let a = 'ai';
let e = 'enter';
let i = 'imes';
let o = 'ober';
let u = 'ufat';


function ocultarElemento (id) {
    let ocultar = document.getElementById(id);
    ocultar.style.display = 'none';
}

function agregarClase (id, clase) {
    let mostrar = document.getElementById(id);
    mostrar.classList.add(clase);
}

function eliminarClase(id, clase) {
    let eliminar = document.getElementById(id);
    eliminar.classList.remove(clase);
}

function limpiarCaja (id) {
    let limpiar = document.getElementById(id)
    limpiar.value = '';
}

function añadirTexto (id, texto) {
    let palabara = document.getElementById(id);
    palabara.innerHTML = texto
}

function encriptar() {
    let contenido = document.getElementById('texto-encriptar').value;
    let palabraDesencriptada = '';
    
    if(validar()) {
        for(letra = 0; letra < contenido.length;letra++){
            if (contenido[letra] === 'a'){
                palabraDesencriptada += a;
            } else if (contenido[letra] === 'e'){
                palabraDesencriptada += e;
            } else if (contenido[letra] === 'i'){
                palabraDesencriptada += i;
            } else if (contenido[letra] === 'o'){
                palabraDesencriptada += o;
            } else if (contenido[letra] === 'u'){
                palabraDesencriptada += u;
            } else {
                palabraDesencriptada += contenido[letra];
            }
        }

        limpiarCaja('texto-encriptar')
        ocultarElemento('mensaje__sin-encriptar');
        agregarClase('mensaje__encriptado', 'mensaje__encriptado--mostrar');
        añadirTexto('texto-desencriptado', palabraDesencriptada);
        eliminarClase('texto-encriptar', 'advertencia');
        eliminarClase('textoAdevertencia', 'texto-rojo');

    } else {
        agregarClase('texto-encriptar', 'advertencia');
        agregarClase('textoAdevertencia', 'texto-rojo');
    }
}

function desencriptar() {
    let frase = document.getElementById('texto-encriptar').value;
    palabraDesencriptada = '';

    if (validar()){
        for(letra = 0; letra < frase.length;letra++){
            if (frase[letra] === 'a'){
                palabraDesencriptada += 'a';
                letra += 1;
            } else if (frase[letra] === 'e'){
                palabraDesencriptada += 'e';
                letra += 4;
            } else if (frase[letra] === 'i'){
                palabraDesencriptada += 'i';
                letra += 3;
            } else if (frase[letra] === 'o'){
                palabraDesencriptada += 'o';
                letra += 3;
            } else if (frase[letra] === 'u'){
                palabraDesencriptada += 'u';
                letra += 3;
            } else {
                palabraDesencriptada += frase[letra];
            }
        }

        limpiarCaja('texto-encriptar');
        ocultarElemento('mensaje__sin-encriptar');
        agregarClase('mensaje__encriptado', 'mensaje__encriptado--mostrar');
        añadirTexto('texto-desencriptado', palabraDesencriptada );
        eliminarClase('texto-encriptar', 'advertencia');
        eliminarClase('textoAdevertencia', 'texto-rojo');

    } else {
        agregarClase('texto-encriptar', 'advertencia');
        agregarClase('textoAdevertencia', 'texto-rojo');
    }
}

async function copiar() {
    let texto = document.getElementById('texto-desencriptado').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
    } catch (err) {
        console.error('error ', err)
    }
}

function validar(){
    let esValido = false;
    const input = document.getElementById('texto-encriptar');
    const patron = new RegExp('^[a-zñ!?.,;:\\s]+$');

    if (patron.test(input.value)) {
        esValido = true;
    } else {
        esValido = false;
    }

    return esValido;
}

