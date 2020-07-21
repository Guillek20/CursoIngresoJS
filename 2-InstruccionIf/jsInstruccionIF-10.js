function mostrar()
{
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4	*/

	//FORMA 1
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	//nota  toma una nota aleatoria
	nota = Math.floor(Math.random() *10 +1);
	
	
	if(nota>8) //Si la nota es menor a 8 salta el segundo if.
	{
		alert("EXCELENTE, su nota es " + nota + ".");
	}else
	{
		if(nota>3) //Si la nota es menor a 3 actua else.
		{
			alert("APROBO, su nota es " + nota + ".");
		}else
		{
			alert("Vamos, la proxima se puede. Su nota es " + nota + ".");
		}
	}

	//FORMA 2
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var resultado;

	//nota  toma una nota aleatoria
	nota = Math.floor(Math.random() *10 +1);

	if(nota>8) //Si la nota es menor a 8 salta el segundo if.
	{
		resultado = "Excelente" ;
	}else
	{
		if(nota>3) //Si la nota es menor a 3 actua else.
		{
			resultado = "Aprobado" ;

		}else
		{
			resultado = "Vamos, la proxima se puede" ;
		}
	}
	alert(resultado);
}//FIN DE LA FUNCIÓN