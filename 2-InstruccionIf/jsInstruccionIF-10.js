function mostrar()
{
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4	*/

	var nota;

	nota= Math.floor(Math.random() * 10) + 1;
	
	if(nota>8)
	{
		alert("EXCELENTE, su nota es " + nota);
	}else
	{
		if(nota>3)
		{
			alert("APROBO, su nota es " + nota);
		}else
		{
			alert("Vamos, la proxima se puede, su nota es " + nota);
		}
	}
}//FIN DE LA FUNCIÓN