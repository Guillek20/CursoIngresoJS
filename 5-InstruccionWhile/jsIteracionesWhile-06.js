function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador = contador+1;
		acumulador=acumulador+numeroIngresado;
		promedio=acumulador/contador;		
	}
	txtIdPromedio.value=promedio;
	txtIdSuma.value=acumulador

}//FIN DE LA FUNCIÓN