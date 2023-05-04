//e --> enter
//o --> ober
//i --> imes
//a --> ai
//u --> ufat

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    //i es para que afecte tanto a mayuculasas como minusculas -- e else{
    //g es pra toda la linea y/o oracion
    //m es par que afecte a multiples lienas o parrafos}
    var txtCifrado = texto.replace(/e/img,"enter")
    var txtCifrado = txtCifrado.replace(/o/img,"ober")
    var txtCifrado = txtCifrado.replace(/i/img,"imes")
    var txtCifrado = txtCifrado.replace(/a/img,"ai")
    var txtCifrado = txtCifrado.replace(/u/img,"ufat")
    

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("encontrado").style.display = "none";
    document.getElementById("texto").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto a mayuculasas como minusculas -- e else{
    //g es pra toda la linea y/o oracion
    //m es par que afecte a multiples lienas o parrafos
    var txtCifrado = texto.replace(/enter/img,"e")
    var txtCifrado = txtCifrado.replace(/ober/img,"o")
    var txtCifrado = txtCifrado.replace(/imes/img,"i")
    var txtCifrado = txtCifrado.replace(/ai/img,"a")
    var txtCifrado = txtCifrado.replace(/ufat/img,"u")

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("encontrado").style.display = "none";
    document.getElementById("texto").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy(){
    var contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("copy")
    alert("Texto Copiado al Portapapeles")

}

