/*var imagenes = document.getElementsByClassName("box-work");
imagenes.addEventListener("onmouseover", mostrarImagenGrande);
imagenes.addEventListener("onmouseout", regresarTamañoInicial);


function mostrarImagenGrande() {

}

function regresarTamañoInicial() {

}*/

//PRUEBA1
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var modalImg = document.getElementById("imagenMostrar");
var captionText = document.getElementById("caption");

var img = [];
var span = [];

for(var i=0; i < 9; i++){
  img[i] = document.getElementsByClassName("mostrarImagen")[i];
  img[i].addEventListener("click", mostrarImagenGrande);
}

for (var i = 0; i < 9; i++){
 span[i]= document.getElementsByClassName("close")[0];
 span[i].addEventListener("click",cerrar);
}

function mostrarImagenGrande(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
function cerrar() {
    modal.style.display = "none";
}
