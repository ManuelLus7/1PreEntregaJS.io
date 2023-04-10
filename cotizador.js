const tasaAnual= 2.20;
  const trimestral= tasaAnual / 4;
  const mantenimientoOferta = "Mantenimiento de Oferta";
  const ejecucionContrato = "Ejecución de Contrato";
  const anticipoFinanciero = "Anticipo Financiero";
  const fondoReparo = "Fondo de Reparo";
  const bienvenido = "Bienvenido!! "
  const menu = `¿Qué Seguro de Caución desea Cotizar?
  1-Mantenimiento de Oferta
  2-Ejecución de Contrato
  3-Anticipo Financiero
  4-Fondo de Reparo
  5-Salir`;
  const siguienteCotizacion = "Desea Cotizar algún Otro Seguro "
  const valorOriginal = 0.00
  const valorFormateado = new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 2,
  }).format(valorOriginal)

  let usuario = prompt("Ingrese su Nombre por Favor...");
  let opcion = parseInt(prompt(bienvenido+usuario+ " a Cwin Broker de Seguros:\n Su Tasa Anual actualmente es "+tasaAnual+" %\n\n"+menu));
  let nombreObra = prompt("Ingrese el Nombre de la Obra");
  let sumaAsegurada = prompt("Ingrese el Importe de la Suma Asegurada que necesita");
  let cotizacion = trimestral;
  let total = valorOriginal; 
  

  if (sumaAsegurada <= 333333333) {
    mantenimiento = 2000 + "\n  Este Importe es el Mínimo Vigente para el Cobro de su PRIMA\n  La Facturación es Trimestral";
    ejecución = 2000 + "\n  Este Importe es el Mínimo Vigente para el Cobro de su PRIMA\n  La Facturación es Trimestral";
    anticipo = 2000 + "\n  Este Importe es el Mínimo Vigente para el Cobro de su PRIMA\n  La Facturación es Trimestral";
    fondo = 2000 + "\n  Este Importe es el Mínimo Vigente para el Cobro de su PRIMA\n  La Facturación es Trimestral";
  } else if (sumaAsegurada > 333333333.01) {
    mantenimiento = Math.round(((sumaAsegurada*1/100)*(cotizacion))/100) + "\n  La Facturación es Trimestral";
    ejecución = Math.round(((sumaAsegurada*5/100)*(cotizacion))/100) + "\n  La Facturación es Trimestral";
    anticipo = Math.round(((sumaAsegurada*30/100)*(cotizacion))/100) + "\n  La Facturación es Trimestral";
    fondo = Math.round(((sumaAsegurada*5/100)*(cotizacion))/100) + "\n  La Facturación es Trimestral";
  }
 

while (opcion !=5) {
    switch (opcion) {
        case 1:
            total = ` es de $: ${mantenimiento}`;
            alert(`Su Tasa Anual Actual es de: ${tasaAnual}%\n Detalle de Su Cotización:\n- Tipo de Póliza: ${mantenimientoOferta}\n- Nombre de la Obra: ${nombreObra}\n- Suma Asegurada: $ ${sumaAsegurada}\n- Su PRIMA de Seguro: ${total}`);
              break;
           
        case 2:
            total = ` es de $: ${ejecución}`;
                alert(`Su Tasa Anual Actual es de: ${tasaAnual}%\n Detalle de Su Cotización:\n- Tipo de Póliza: ${ejecucionContrato}\n- Nombre de la Obra: ${nombreObra}\n- Suma Asegurada: $ ${sumaAsegurada}\n- Su PRIMA de Seguro: ${total}`);
              break;
            
            case 3:
                total = ` es de $: ${anticipo}`;
                alert(`Su Tasa Anual Actual es de: ${tasaAnual}%\n Detalle de Su Cotización:\n- Tipo de Póliza: ${anticipoFinanciero}\n- Nombre de la Obra: ${nombreObra}\n- Suma Asegurada: $ ${sumaAsegurada}\n- Su PRIMA de Seguro: ${total}`);

              break;
                
            case 4:
                total = ` es de $: ${fondo}`;
              alert(`Su Tasa Anual Actual es de: ${tasaAnual}%\n Detalle de Su Cotización:\n- Tipo de Póliza: ${fondoReparo}\n- Nombre de la Obra: ${nombreObra}\n- Suma Asegurada: $ ${sumaAsegurada}\n- Su PRIMA de Seguro: ${total}`);
              break;
            default:
                break;
                
        }
        
        opcion = parseInt(prompt(siguienteCotizacion+usuario+menu));

        if (opcion===5) {
          console.log("Gracias por Utilizar Nuestro Simulador de Seguros de Caución \n Curso: JavaScript \n Comisión: 39510 \n Alumno: Manuel Lus");
          alert("Gracias por Utilizar Nuestro Simulador de Seguros de Caución \n Curso: JavaScript \n Comisión: 39510 \n Alumno: Manuel Lus");
      }
}