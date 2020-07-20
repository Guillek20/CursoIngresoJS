function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	
	//Usted es mayor de edad
	if(edad>=18)
	{
		alert("Su edad es " + edad +", usted es mayor de edad.")
	}
	//Usted es adolecente	
	if(edad>=13 && edad<=17)
	{
		alert("Su edad es " + edad +", usted es adolecente.")
	}
	//Usted es un niño
	if(edad<13)
	{
		alert("Su edad es " + edad +", usted es un niño.")
	}


}//FIN DE LA FUNCIÓN