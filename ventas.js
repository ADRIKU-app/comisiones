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
    let cmpSueldoBase=document.getElementById("txtSueldoBase");
    let cmpVentas=document.getElementById("txtVentas");
    let cmpPrecio=document.getElementById("txtPrecio");

    //Recuperamos el valor de las cajas de texto
    let sueldoBaseStr=cmpSueldoBase.value;
    let numeroVentasStr=cmpVentas.value;
    let precioProductoStr=cmpPrecio.value;

    //Convertimos el texto a número decimal
    let sueldoBase=parseFloat(sueldoBaseStr);
    let numeroVentas=parseFloat(numeroVentasStr);
    let precioProductos=parseFloat(precioProductoStr);

    //Calculamos la comision
    let comision=calcularComision(numeroVentas,precioProductos);

    //Calculamos el sueldo + la comision
    let total=sueldoBase+comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent=sueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;

}