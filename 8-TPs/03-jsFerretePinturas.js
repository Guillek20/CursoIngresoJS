/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheitAcentigrados;
    var centigradosAfahrenheit;
    var temperaturaIngresada;
    var operacion;

    fahrenheitAcentigrados = -32;
    temperaturaIngresada = txtIdTemperatura.value;
    temperaturaIngresada = parseInt(temperaturaIngresada);
    operacion= (temperaturaIngresada - 32) * 5/9;

    alert("Su temperatura es " + operacion + " grados fahrenheit");


}

function CentigradosFahrenheit () 
{
    var fahrenheitAcentigrados;
    var centigradosAfahrenheit;
    var temperaturaIngresada;
    var operacion;

    fahrenheitAcentigrados = -32;
    temperaturaIngresada = txtIdTemperatura.value;
    temperaturaIngresada = parseInt(temperaturaIngresada);
    operacion=  (temperaturaIngresada *5/9) + 32;

    alert("Su temperatura es " + operacion + " grados centigrados");
}
