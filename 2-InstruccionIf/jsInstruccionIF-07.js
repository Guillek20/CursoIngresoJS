function mostrar()
{	
	/*Al ingresar una edad menor a 18 años y
	un estado civil distinto a "Soltero", mostrar el siguiente mensaje:
	Es muy pequeño para NO ser soltero.'*/

	//tomo la edad  
	var edad;
	var estadoCivilIngresado;

	edad=txtIdEdad.value;
	estadoCivilIngresado=document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivilIngresado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
}//FIN DE LA FUNCIÓN