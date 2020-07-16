/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var operacion;
    var resultado;
    var cantidadLineas;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    radio = largo*ancho;
    
    txtIdRadio.value=("El radio del de su terreno es de " +radio);


    operacion = (ancho+largo)*2;
    resultado = 3*operacion;


    alert("Para alamabrar el perimetro se necesitan " + resultado + " m.")
}
function Circulo () 
{
    var radio;
    var resultado;
    var cantidadLineas;

    radio = txtIdRadio.value;
    radio = parseInt(radio);
    
    resultado = radio*3.14;
    cantidadLineas = resultado*3;

    alert("Para alamabrar el perimetro se necesitan " + cantidadLineas + " m.")	
}
function Materiales () 
{
 var cemento;
 var cal;
 var largo;
 var ancho;
 var operacion;

 largo = txtIdLargo.value;
 largo = parseInt(largo);

 ancho = txtIdAncho.value;
 ancho = parseInt(ancho);

 operacion = largo*ancho;

 cemento = operacion * 2;
 cal = operacion * 3 ;

 alert("La cantidad de bolsas de cemento es " + cemento +
       " La cantidad de bolsas de cal es " + cal)
}