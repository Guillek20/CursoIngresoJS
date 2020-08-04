/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		alert("Ingrese un sexo");
		sexoIngresado = prompt("ingrese f ó m .");
	}
	alert("Sexo ingresado.");
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN