function encriptar(){
    var mensaje = document.getElementById("inputTexto").value;
        var mensajeEncriptado = mensaje
        .replace(/[e\é\ê]/gi, "enter")
        .replace(/[i\í\î]/gi, "imes")
        .replace(/[a\á\â]/gi, "ai")
        .replace(/[o\ó\ô]/gi, "ober")
        .replace(/[u\ú\û]/gi, "ufat");

        document.getElementById("imgDerecha").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("conMensaje").innerHTML = mensajeEncriptado;
        document.getElementById("btn-copiar").style.display = "show";
        document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar(){
    var mensaje = document.getElementById("inputTexto").value.toLowerCase();
        var mensajedesencriptado = mensaje
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        document.getElementById("imgDerecha").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("conMensaje").innerHTML = mensajedesencriptado;
        document.getElementById("btn-copiar").style.display = "show";
        document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#conMensaje");
        navigator.clipboard.writeText(contenido.value);
        contenido.value = ""
        alert("Copy!");
}
