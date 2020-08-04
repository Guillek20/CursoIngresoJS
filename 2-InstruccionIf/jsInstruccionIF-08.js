function mostrar()
{
    /*
Hacerlo en el ejercicio 08 del IF: CON SWITCH

Se pide ingresar una edad y un estado cicvil
    x a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
    x a todos los mayores de edad, mostrar el mensaje "se responsable"
    x a los mayores de edad solteros, tambien informar "a vivir la vida"
    x a los mayores de edad casados , tambien informar "a disfrutar la pareja"
    x a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	x a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
    x a los niños tambien informar "hagan la tarea" 
	 a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
    //FORMA DE HACERLO CON IF/switch
    var estado;
    var edad;
    
    edad=txtIdEdad.value;
    edad=parseInt(edad);
    estado=document.getElementById("estadoCivil").value;

    if(edad>59)
    {
        alert("Sos persona de riesgo");
    }else
    {
        if(edad>17)
        {
            alert("Se responsable")
            switch(estado)
            {
                case "Soltero":
                    alert("A vivir la vida")
                    break;
                case "Casado":
                    alert("a disfrutar la pareja")
                    break;     
            }

        }else
        {
            if(edad<18)
            {
                alert("Respeta a tus mayores")
                switch(estado)
                {
                    case "Divorciado":
                    case "Casado":
                    alert("sos muy joven para no ser soltero")
                    break;
                }
            }else
            {
                if(edad<13)
                {
                    alert("Hagan la tarea")
                }
            }
        }
    }
    switch(estado)
    {
        case "Divorciado":
            alert("a intentarlo nuevamente")
            break;
    }
 

}//FIN DE LA FUNCIÓN

