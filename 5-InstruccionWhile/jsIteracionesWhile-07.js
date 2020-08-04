/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var promedio;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese un numero")
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Quiere ingresar otro numero?")
		acumulador=acumulador + numeroIngresado;
		contador=contador+1;
		promedio=acumulador/contador;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN