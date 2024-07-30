// Solicitar datos
let precioVentaUnitario = parseFloat(prompt("Ingrese precio de venta unitario"));
let costoUnitario = parseFloat(prompt("Ingrese costo unitario"));
let unidadesVendidas = parseInt(prompt("Ingrese el número de unidades vendidas"));
let otrosGastos = parseFloat(prompt("Ingrese otros gastos (costo membresia Shopify y marketplace)"));
let meses = 12;

// Cálculo margen mensual
function margenMensual(precioVentaUnitario, costoUnitario, unidadesVendidas, otrosGastos, meses) {
    const margenes = [];
    for (let mes = 1; mes <= meses; mes++) {
        let margen = ((precioVentaUnitario - costoUnitario) * unidadesVendidas) - otrosGastos;
        margenes.push({mes: mes, margen: margen});
    }
    return margenes;
}

// Ver los resultados
function verResultados(margenes) {
    console.log("Resultado de la simulación: ");
    for (let i = 0; i < margenes.length; i++) {
        console.log("Mes " + margenes[i].mes + ": Margen de ganancia = " + margenes[i].margen);
    }
}

if (precioVentaUnitario <= costoUnitario) {
    alert('El precio de venta debe ser mayor que el costo unitario.');
} else {
    let resultadosMargen = margenMensual(precioVentaUnitario, costoUnitario, unidadesVendidas, otrosGastos, meses);
    verResultados(resultadosMargen);
}