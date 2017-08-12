var min = 1;
var max = 100;
var numero_secreto = math.random()*(max-min) + min;

 parseInt(numero_secreto);
 console.log(numero_secreto);
 
 var mensaje = "ingresa un numero";
 
 while(){
	var numero_del_usuario prompt(mensaje,"0");
	 
	 numero_del_usuario = parseInt(numero_del_usuario);
	 
	 if (numero_del_usuario === numero_secreto){
		 alert("ganaste");
		 break;
	 }else if (numero_del_usuario === 0){
		 break;
	 }else if (numero_del_usuario > numero_secreto){
		 mensaje = ("es menor");
			 
		 }else if (numero_del_usuario < numero_secreto){
		 mensaje = ("es mayor");}