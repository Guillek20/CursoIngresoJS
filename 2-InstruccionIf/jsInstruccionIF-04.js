/*Ejercicio 4 - Guillermo Lincoman 
 Edad entre 13 y 17 años(Inclusive)*/

function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	//forma 1
	if(edad>12)
	{
		if(edad<18)
		{
		alert("Su edad es " + edad +", usted es adolecente.")
		}
	}

	/* Forma 2
	if(edad>12&&edad<18)
	{
		alert("Su edad es " + edad +", usted es adolecente.")

	}
	*/

}//FIN DE LA FUNCIÓN