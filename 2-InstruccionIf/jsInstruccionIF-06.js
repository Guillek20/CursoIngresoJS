//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
//Guillermo Lincoman

function mostrar()
{
    var edad;

    edad=txtIdEdad.value;
    edad=parseInt(edad);

    if(edad>17)
    {
        alert("Esta persona es mayor de 18 años");
    }else
    {
        if(edad>13)
        {
            alert("Esta persona es adolecente");
        }else
        {
            alert("Esta persona es un niño");
        }
    }
    
}//FIN DE LA FUNCIÓN