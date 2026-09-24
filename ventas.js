const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }

    return comision;
}

// Nueva función genérica para validar cualquier campo
function validarCampo(idCmp, idMsj) {
    let valor = recuperarTexto(idCmp);
    let cmpMsj = document.getElementById(idMsj);
    
    // Regla 3: No puede estar vacío
    if (valor.trim() === "") {
        cmpMsj.textContent = "CAMPO OBLIGATORIO";
        return false;
    }
    
    // Regla 1: Solo usar números (isNaN verifica si NO es un número)
    if (isNaN(valor)) {
        cmpMsj.textContent = "SOLO SE PERMITEN NÚMEROS";
        return false;
    }
    
    // Regla 2: Máximo 5 caracteres
    if (valor.length > 5) {
        cmpMsj.textContent = "MÁXIMO 5 CARACTERES";
        return false;
    }
    
    // Si pasa todas las validaciones, limpiamos el mensaje
    cmpMsj.textContent = "";
    return true;
}

function calcular() {
    // Ejecutamos las validaciones de los tres campos
    let sueldoValido = validarCampo("txtSueldoBase", "errSueldoBase");
    let ventasValidas = validarCampo("txtVentas", "errVentas");
    let precioValido = validarCampo("txtPrecio", "errPrecio");

    // Si alguno de los campos es inválido (false), detenemos el cálculo
    if (sueldoValido == false || ventasValidas == false || precioValido == false) {
        return;
    }

    // Convertimos el texto a número decimal
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProductos = recuperarFloat("txtPrecio");

    // Calculamos la comision
    let comision = calcularComision(numeroVentas, precioProductos);

    // Calculamos el sueldo + la comision
    let total = sueldoBase + comision;

    // Mostramos los resultados en los span usando utilitarios
    mostrarEnSpan("spSueldoBase", sueldoBase.toFixed(2));
    mostrarEnSpan("spComision", comision.toFixed(2));
    mostrarEnSpan("spTotal", total.toFixed(2));
}