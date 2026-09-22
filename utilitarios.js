function recuperarTexto(idCmp){
    let cmp=document.getElementById(idCmp);
    let valor=cmp.value;
    return valor;
}

function recuperarFloat(idCmp){
    let valorTexto=recuperarTexto(idCmp);
    let valorFloat=parseFloat(valorTexto);
    return valorFloat;
}

function recuperarEntero(idCmp){
    let valorTexto=recuperarTexto(idCmp);
    let valorEntero=parseInt(valorTexto);
    return valorEntero;
}

function mostrarEnSpan(idCmp,valor){
    let cmp=document.getElementById(idCmp);
    cmp.textContent=valor;
}