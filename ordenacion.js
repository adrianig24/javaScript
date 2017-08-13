function ordenacion(a,b){
	if(a>b){
		return 1;
	}else if(b>a){
		return -1;
	}else if (a==b){
		return 0;
	}
}


var arreglo = [2,5,1,10,20];
arreglo.sort(ordenacion);
arreglo.reverse();
console.log(arreglo);