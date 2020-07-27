/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 GUILLERMO LINCOMAN
 
function CalcularPrecio () 
{
     var cantidadLamparas;//cantidad
     var lampara = 35;//precio
     var marcaLampara ;//marca
     var operacion;//Cantidad de lamparas por precio de lamparas
     var precioFinal;//Descuento segun el precio
     var precioConDescuento;//Precio menos descuento
     var precioConIngresos;//Precio con 10% de ingresos brutos

     marcaLampara = document.getElementById("Marca").value;//valido Marcas
     cantidadLamparas = txtIdCantidad.value; //Tomo la cantidad de lamparas ingresadas
     cantidadLamparas = parseInt(cantidadLamparas);
     operacion = cantidadLamparas * lampara;
     //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if(cantidadLamparas>5)
    {
        precioFinal=operacion*50/100;
    }else
    {
        //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
        if(cantidadLamparas==5 && marcaLampara=="ArgentinaLuz")
        {
            precioFinal=operacion*40/100;
        }else
        {//y si es de otra marca el descuento es del 30%. 
            if(cantidadLamparas==5 && marcaLampara != "ArgentinaLuz")
            {
                precioFinal=operacion*30/100; 
            }
            else
            {
                //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %    
                if(cantidadLamparas==4 && marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
                {
                    precioFinal=operacion*25/100; 
                }else
                {//y si es de otra marca el descuento es del 20%. 
                    if(cantidadLamparas==4)
                    {
                        precioFinal=operacion*20/100; 
                    }else
                    {
                        //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15% 
                        if(cantidadLamparas==3 && marcaLampara=="ArgentinaLuz")
                        {
                            precioFinal=operacion*15/100; 
                        }else
                        {//, si es  “FelipeLamparas” se hace un descuento del 10 %
                            if(cantidadLamparas==3 && marcaLampara=="FelipeLamparas")
                            {
                                precioFinal=operacion*10/100; 
                            }else
                            {//y si es de otra marca un 5%.
                                if(cantidadLamparas<3)
                                {
                                    precioFinal=operacion*5/100; 
                                }
                            }
                        }
                    }
                }
            }
        }
    }    
    
    precioConDescuento = operacion-precioFinal;
    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    if(precioConDescuento>120)
    {
        precioConIngresos = precioConDescuento*10/100+precioConDescuento;
        alert("IIBB Usted pago "+ precioConIngresos + ".");
    }
    txtIdprecioDescuento.value = precioConDescuento;
}*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 GUILLERMO LINCOMAN
 */
function CalcularPrecio () 
{
     var cantidadLamparas;//cantidad
     var lampara = 35;//precio
     var marcaLampara ;//marca
     var operacion;//Cantidad de lamparas por precio de lamparas
     var precioFinal;//Descuento segun el precio
     var precioConDescuento;//Precio menos descuento
     var precioConIngresos;//Precio con 10% de ingresos brutos

     marcaLampara = document.getElementById("Marca").value;//valido Marcas
     cantidadLamparas = txtIdCantidad.value; //Tomo la cantidad de lamparas ingresadas
     cantidadLamparas = parseInt(cantidadLamparas);
     operacion = cantidadLamparas * lampara;
     //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if(cantidadLamparas>5)
    {
        precioFinal=operacion*50/100;
    }else
    {
        //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
        if(cantidadLamparas==5 && marcaLampara=="ArgentinaLuz")
        {
            precioFinal=operacion*40/100;
        }else
        {//y si es de otra marca el descuento es del 30%. 
            if(cantidadLamparas==5 && marcaLampara != "ArgentinaLuz")
            {
                precioFinal=operacion*30/100; 
            }
            else
            {
                //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %    
                if(cantidadLamparas==4 && marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
                {
                    precioFinal=operacion*25/100; 
                }else
                {//y si es de otra marca el descuento es del 20%. 
                    if(cantidadLamparas==4)
                    {
                        precioFinal=operacion*20/100; 
                    }else
                    {
                        //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15% 
                        if(cantidadLamparas==3 && marcaLampara=="ArgentinaLuz")
                        {
                            precioFinal=operacion*15/100; 
                        }else
                        {//, si es  “FelipeLamparas” se hace un descuento del 10 %
                            if(cantidadLamparas==3 && marcaLampara=="FelipeLamparas")
                            {
                                precioFinal=operacion*10/100; 
                            }else
                            {//y si es de otra marca un 5%.
                                if(cantidadLamparas<3)
                                {
                                    precioFinal=operacion*5/100; 
                                }
                            }
                        }
                    }
                }
            }
        }
    }    
    
    precioConDescuento = operacion-precioFinal;
    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    if(precioConDescuento>120)
    {
        precioConIngresos = precioConDescuento*10/100+precioConDescuento;
        alert("IIBB Usted pago "+ precioConIngresos + ".");
    }
    txtIdprecioDescuento.value = precioConDescuento;
}