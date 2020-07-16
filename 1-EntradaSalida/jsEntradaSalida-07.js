/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var suma;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	suma = numero1 + numero2 ;

	alert(suma);
}

function restar()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var resta;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resta = numero1 - numero2 ;

	alert(resta);
}

function multiplicar()
{ 
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var multiplicar;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	multiplicar = numero1 * numero2 ;

	alert(multiplicar);
}

function dividir()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var dividir;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	dividir = numero1 * numero2 ;

	alert(dividir);
}

