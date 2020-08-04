function mostrar()
{
	/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino 
	Guillermo Lincoman*/
	var destinoIngresado;
	destinoIngresado= document.getElementById("txtIdDestino").value

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			alert("Frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Calor");
			break;			
	}
}//FIN DE LA FUNCIÓN