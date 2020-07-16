/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    resultado = (precioUno + precioDos + precioTres);

    alert("La suma de todos los precios es de " + resultado + ".");
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    var resultado;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    
    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres);
    resultado = promedio / 3 ;


    alert("El promedio es de " + resultado + ".");
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var iva;
    var resultado;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    
    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    iva = (precioUno + precioDos + precioTres);
    resultado = iva*21/100+iva;


    alert("El precio es de " + iva + " y con el 21% de iva el precio final es de " + resultado + ".");
}