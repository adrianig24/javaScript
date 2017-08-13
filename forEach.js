var numeros = [2,4,6,8];
numeros.forEach(function(elemento,index,arreglo){
	arreglo[index] = math.pow(elemento,2);
});

console.log(cuadrados);