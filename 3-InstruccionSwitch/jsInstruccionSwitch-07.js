function mostrar()
{
	/*Al selecionar un destino , indicar el punto cardinal de nuestro pais 
	en donde se encuentra Norte, Sur, Este u Oeste 
	Guillermo Lincoman*/
	var destinoIngresado;

	destinoIngresado =document.getElementById("txtIdDestino").value;
	switch(destinoIngresado)
	{
		case "Mar del plata":
			alert("Este");
			break;
		case "Cordoba":
			alert("Oeste");
			break;
		case "Bariloche":
			alert("Sur");
			break;
		case "Cataratas":
			alert("Norte");
			break;				
	}
}//FIN DE LA FUNCIÓN