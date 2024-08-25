let entrada=document.querySelector(".entrada");
let mensaje=document.querySelector(".mensaje");
let btncopy=document.getElementById('copy')
var texto = document.querySelector(".entrada").value

//En el encriptador, las letras deben sustituirse de la siguiente manera:
//"E" --> "enter" | "i" --> "imes" | "a" --> "ai" | "o" --> "ober" | "u" --> "ufat"

function encriptar(encriptedText) {
    let CodeMtx =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptedText=encriptedText.toLowerCase();
    for(let i=0;i<CodeMtx.length;i++) {
        if(encriptedText.includes(CodeMtx[i][0])) {
            encriptedText=encriptedText.replaceAll(CodeMtx[i][0],CodeMtx[i][1]);
        }
    }
    return encriptedText
}

//En el desencriptador, las letras deben sustituirse de la siguiente manera:
//"enter" --> "e" | "imes" --> "i" | "ai" --> "a" | "ober" --> "o" | "ufat" --> "u"

function desencriptar(desencriptedText){
    let CodeMtx =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptedText=desencriptedText.toLowerCase();

    for(let i=0;i<CodeMtx.length;i++){
        if(desencriptedText.includes(CodeMtx[i][1])){
            desencriptedText=desencriptedText.replaceAll(CodeMtx[i][1],CodeMtx[i][0]);
        }
    }
    return desencriptedText;
}

function vaciar () {
    if (texto=="") {
        mensaje.style.backgroundImage="url('Muñeco.png')";
        btncopy.style.visibility="hidden";
    } else {
        mensaje.style.backgroundImage="none";
        btncopy.style.visibility="visible";
        btncopy.style.marginTop= "512.8px";
        btncopy.style.position= "flex";    
    }
}

function btnEncriptar() {
    const textoEncriptado=encriptar(entrada.value);
    texto= document.querySelector(".entrada").value;
    mensaje.value=textoEncriptado;
    entrada.value="";
    vaciar();
}

function btnDesencriptar() {
    const textoDesencriptado=desencriptar(entrada.value);
    texto= document.querySelector(".entrada").value;
    mensaje.value=textoDesencriptado;
    entrada.value="";
    vaciar();
}

function btnCopiar() {
    const textoCopiado= mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    entrada.value="";
    mensaje.style.backgroundImage="none";
}