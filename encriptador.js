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

    if (validar()){
        while (frase.includes('ai')  || frase.includes('enter') || frase.includes('imes') || frase.includes('ober') || frase.includes('ufat')) {
            if (frase.includes('ai')) {
                frase = frase.replace('ai', 'a');
            }else if (frase.includes('enter')) {
                frase = frase.replace('enter', 'e');
            }else if (frase.includes('imes')) {
                frase = frase.replace('imes', 'i');
            }else if (frase.includes('ober')) {
                frase = frase.replace('ober', 'o');
            }else if (frase.includes('ufat')) {
                frase = frase.replace('ufat', 'u');
            }
        }

        limpiarCaja('texto-encriptar');
        ocultarElemento('mensaje__sin-encriptar');
        agregarClase('mensaje__encriptado', 'mensaje__encriptado--mostrar');
        añadirTexto('texto-desencriptado', frase );
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

