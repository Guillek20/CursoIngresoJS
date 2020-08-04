/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;	//variable de control
	i=0; 	//la variable de control inicia en 0
	while(i<10)//mientras i sea menor a 10, while se va a ejecutar 
	{
		i=i+1;
		document.write(i+"<br>");
		alert(i+1);//cada vez que entre al while va a sumar uno
	}
	
}//FIN DE LA FUNCIÓN