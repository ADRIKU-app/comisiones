const VENTAS_BASE=5;

function calcularComision(numeroVentas,precioProducto){
    let comision=0;

    if(numeroVentas>VENTAS_BASE){
        let ventasExtras=numeroVentas-VENTAS_BASE;
        comision=ventasExtras*(precioProducto*0.10);
    }

    return comision;
}

function calcular(){

    //Recuperamos propiedades de la cajas de texto
    //Comentamos código repetitivo para limpiar nuestras líneas de código
    /*
    let cmpSueldoBase=document.getElementById("txtSueldoBase");
    let cmpVentas=document.getElementById("txtVentas");
    let cmpPrecio=document.getElementById("txtPrecio");
    */

    /*
    let sueldoBaseStr=cmpSueldoBase.value;
    let numeroVentasStr=cmpVentas.value;
    let precioProductosStr=cmpPrecio.value;
    */

    //Recuperamos el valor de las cajas de texto utilizando la función de utilitarios
    /*
    let sueldoBaseStr=recuperarTexto("txtSueldoBase");
    let numeroVentasStr=recuperarTexto("txtVentas");
    let precioProductoStr=recuperarTexto("txtPrecio");
    */
    //Convertimos el texto a número decimal
    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let precioProductos=recuperarFloat("txtPrecio");

    //Calculamos la comision
    let comision=calcularComision(numeroVentas,precioProductos);

    //Calculamos el sueldo + la comision
    let total=sueldoBase+comision;

    /*
    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");
    */

    /*spSueldoBase.textContent=sueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;
    */

    mostrarEnSpan("spSueldoBase",sueldoBase);
    mostrarEnSpan("spComision",comision);
    mostrarEnSpan("spTotal",total);

}