// con button onclick en html ó cualquier evento

function click(){
alert(":3");
}

//ponerle un id al boton

document.getElementById("btn").addEventListener("click",clic,false)  //3 parametros
function clic(){
alert(":3");
}


document.getElementById("mi_div").addEventListener("click",another,true);  //3 parametros el tercero: el 3 indica el orden
document.getElementById("btn").addEventListener("click",clic,false);  //3 parametros

function clic(){
alert("esto disparado por el button");
}

function another(){
alert("esto es disparado por el div");
}