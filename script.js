const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.getElementById("copyButton");
const pasteButton = document.getElementById('pasteButton');

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
// Your existing encryption and decryption functions here

// Function to copy text to clipboard
function copyTextToClipboard() {
    const textToCopy = mensaje.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Event listener for the copy button
copyButton.addEventListener("click", copyTextToClipboard);

// Función para pegar texto desde el portapapeles al área de texto
function pegar() {
    navigator.clipboard.readText()
        .then(text => {
            textArea.value = text;
        })
        .catch(err => {
            console.error('Could not paste text: ', err);
        });
}

// Event listener para el botón de pegar
pasteButton.addEventListener('click', pasteTextFromClipboard);




