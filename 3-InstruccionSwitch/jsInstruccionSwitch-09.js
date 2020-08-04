function mostrar()
{
	/*una agencia de viajes debe sacar las tarifas de los viajes ,
	se cobra $15.000 por cada estadia como base, se pide el ingreso
	de una estacion del año y localidad para vacacionar para poder calcular el precio final
	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
	Mar del plata tiene un descuento del 20% 
	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
	Mar del plata tiene un aumento del 20%	en Otoño y Primavera: bariloche tiene un aumento del 10% 
	cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento 
	Guillermo Lincoman*/
	var estacionIngresada;
	var precioBase = 1500;
	var precioDescuento
	var destino;
	var aumento;
	var descuento;
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento=precioBase*20/100+precioBase
					alert(aumento)
					break;
				case "Cordoba":
					descuento=precioBase*10/100
					precioDescuento = precioBase - descuento;
					alert(precioDescuento)
					break;
			}
		break;
		
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento=precioBase*20/100
					precioDescuento = precioBase - descuento;
					alert(precioDescuento)
					break;
				case "Cordoba":
					aumento=precioBase*10/100+precioBase
					alert(aumento)
					break;
				case "Mar del plata":
					aumento=precioBase*20/100+precioBase
					alert(aumento)
					break;
			}
		
		case "Otoño":
		case "Primavera":
	
			switch(destino)	
			{
				case "Bariloche":
					aumento=precioBase*10/100+precioBase
					alert(aumento)
					break;
				case "Cataratas":
					aumento=precioBase*10/100+precioBase
					alert(aumento)
					break;	
				case "Cordoba":
					alert(precioBase);
					break;	
			}
	}	
}//FIN DE LA FUNCIÓN