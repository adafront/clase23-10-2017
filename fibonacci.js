/*function(){

} 

function saludo(){
	//console.log('Hola');
	return'Hola';
}

//console.log(saludo());
//me guardo el valor de la funcion
//en una variable: 
var valorSaludo = saludo();
console.log(valorSaludo);
*/

function fibonacci(mes){
	var n1=0;
	var n2=1;
	var n3;

	for(var i=0; i<mes; i++){
		n3=n1+n2;
		n1=n2;
		n2=n3;
	}
	return n3;
}

console.log(fibonacci(20));

console.log("***RECURSIVIDAD***");
function fibonacci(n){
	var x=1;
	var x1=0;
	var x2=1;

	for(var i=0; i<n; i++){
		x+=fibonacci(i-1);
	}
	return x;
}	

var cantConejos = fibonacci(20);
console.log(cantConejos);

