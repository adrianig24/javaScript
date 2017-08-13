var arreglo = [20,"hola mundo", {}, []]; // var arreglo = new Array();, mejor la primera forma

var arregl = [20,10,5];

console.log(arregl[0]); //console.log(arregl.length);

arregl.push(7); //agrega al final
arregl.unshift(3); //agrega al principio 

arregl.shift(); //elimina primer elemento del arreglo
arregl.pop(); //elimina el ultimo elemento del arreglo

for (var i=0; i<arregl.length;i++){ //mejor iterar un arreglo de atras adelante
	console.log(arregl[i]);
}

for (var i=arregl.length; i>0;i--){ //mas optimo
	console.log(arregl[i]);
}