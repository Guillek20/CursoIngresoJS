function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	
	if(edad<13)
	{
		alert("Su edad es " + edad +", usted no  es adolecente.");
	}
	if(edad>17)
	{
		alert("Su edad es " + edad +", usted no es adolecente.");
	}
	
	//solucion con else
	if(edad<12 && edad>18)
	{

	}else {
		alert("Adolecente");
	}


	//error forzado
	if(edad<18 || edad>12) //todo entra siempre
	{
		alert("Adolecente");
	}

	//error forzado
	if(edad<12 && edad>18) //nunca entra 
	{
		alert("Adolecente");
	}
}//FIN DE LA FUNCIÓN