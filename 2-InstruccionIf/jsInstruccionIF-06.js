//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
//Guillermo Lincoman

function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	//gastador de procesador

	//Usted es mayor de edad
	/*if(edad>17)
	{
		alert("Su edad es " + edad +", usted es mayor de edad.");
	}
	//Usted es adolecente	
	if(edad>12&&edad<18)
	{
		alert("Su edad es " + edad +", usted es adolecente.");
	}
	//Usted es un niño
	if(edad<13)
	{
		alert("Su edad es " + edad +", usted es un niño.");
	}
*/

	//forma 2 simple
	if(edad>17)
	{
		alert("Su edad es " + edad +", usted es mayor de edad.");
	}
	else
	{
		if(edad>12)
		{
			alert("Su edad es " + edad +", usted es adolecente.");
		}else
		{
			alert("Su edad es " + edad +", usted es un niño.");
		}
	}

	//eror forzado
	if(edad<12)
	{
		alert("niño");
	}else
	{
		if(edad<18)
		{
			alert("adolecente");
		}
	}
	if(edad>18)
	{
		alert("mayor");
	}

}//FIN DE LA FUNCIÓN