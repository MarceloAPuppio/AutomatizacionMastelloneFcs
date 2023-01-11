const puppeteer = require('puppeteer');
const URL='https://www.arba.gov.ar/Aplicaciones/TransporteBienes.asp?organismo=AR'
const CUIT="30707966013";
const PW="Sa7079660";
const DOMICILIO_ORIGEN="Salinas de Bebedero"
const DOMICILIO_NUMERO="1"
const TRANSPORTE="TERCEROS"//Puede ser propio también.

let objTransporte={
    Nombre:"SOLIDUS",
    CUIT:"30-71078345-0",
    CHASIS:"NTE677",
    ACOPLADO:""
}
let objDestinatario={
    CUIT:"30-71078345-0",
    Provincia:"M",
    Calle:"Alvarez Condarco",
    Numero:"183",
    CP:"5570",
    Localidad:"10664",
    TipoComprobante:"1", RemitoPrefijo:"4", RemitoSufijo:"20362", Importe:"246951.32",
    // Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" }]
    Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" },{codigo:"250100",Unidad:"1", Cantidad:"7500", Descripcion:"Sal a fina seca DA", Unidad2:"kilogramos", Cantidad2:"7500" }]
}
let objDestinatario2={
    CUIT:"30-71078345-0",
    Provincia:"M",
    Calle:"Alvarez Condarco",
    Numero:"183",
    CP:"5570",
    Localidad:"10664",
    TipoComprobante:"1", RemitoPrefijo:"4", RemitoSufijo:"20363", Importe:"270219.90",
    Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" }]
    // Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" },{codigo:"250100",Unidad:"1", Cantidad:"7500", Descripcion:"Sal a fina seca DA", Unidad2:"kilogramos", Cantidad2:"7500" }]
}
let clientes=[objDestinatario, objDestinatario2]
/*DATOS ESPECÍFICOS PARA EL COT*/
const CUIT_SOLIDUS="30-71078345-0"
const DOMICILIO_SOLIDUS="Álvarez Condarco 183"
const CODPOSTAL="5570";
(async ()=>{
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage()
await page.goto(URL);
const email= await page.waitForSelector("#CUIT")
const clave= await page.waitForSelector("#clave_Cuit")
const btnLogin = await page.waitForSelector("#frmDatos > div > button")
await page.type("#CUIT",CUIT)
await page.type("#clave_Cuit",PW)
// await btnLogin.click();
await btnLogin.evaluate(b => b.click());
const continuar= await page.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr > td > input")
await continuar.evaluate(b => b.click());
const obtenerCodigo = await page.waitForSelector('#cmenu > li:nth-child(1) > a')
await obtenerCodigo.evaluate(b => b.click());
const select= await page.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > span > select")
await page.select("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > span > select","M")
await page.waitForTimeout(200)
// const localidad= await page.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr:nth-child(3) > td:nth-child(3) > input:nth-child(1)')
// await page.type("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr:nth-child(3) > td:nth-child(3) > input:nth-child(1)","GENERAL SAN MARTIN")

const CP=await page.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr:nth-child(3) > td:nth-child(3) > input.botonFormulario2")
await CP.evaluate(b => b.click());
await page.waitForTimeout(200)
let pages = await browser.pages(); // get all open pages by the browser
const popup = pages[pages.length - 1]; // the popup should be the last page opened

// const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));	
// const popup = await newPagePromise;
// console.log(popup.url(),'sdsdsdsdsdsd');
await popup.type("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input:nth-child(1)",CODPOSTAL)
const buscar1=await popup.waitForSelector("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input.botonFormulario2")
await buscar1.evaluate(b => b.click());
const localidad2=await popup.waitForSelector('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select')
await popup.select('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select',"10664")
await popup.waitForTimeout(200)
const continuar1=await popup.waitForSelector("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(6) > td > input:nth-child(1)")
await continuar1.evaluate(b => b.click());
const domicilio= await page.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr:nth-child(3) > td:nth-child(3) > input:nth-child(6)')
await page.type("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr:nth-child(3) > td:nth-child(3) > input:nth-child(6)",DOMICILIO_SOLIDUS)
await page.select("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > span > select","D")

const CP2=await page.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input.botonFormulario2")
await CP2.evaluate(b => b.click());
await page.waitForTimeout(200)
pages = await browser.pages(); // get all open pages by the browser
const popup2 = pages[pages.length - 1]; // the popup should be the last page opened

// const textx= popup2.waitForSelector('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input:nth-child(3)')                     
await popup2.type("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input:nth-child(3)",'balde')
const buscar2=await popup2.waitForSelector("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input.botonFormulario2")
await buscar2.evaluate(b => b.click());
const localidad3=await popup2.waitForSelector('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select')
await popup2.select('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select',"4284")
await popup2.waitForTimeout(200)
const continuar2=await popup2.waitForSelector("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(6) > td > input:nth-child(1)")
await continuar2.evaluate(b => b.click());
//RELLENO DATOS ORIGEN
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > span > input:nth-child(1)',DOMICILIO_ORIGEN)
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > span > input:nth-child(2)',DOMICILIO_NUMERO)

//Transporte
await cargarTransporte(objTransporte,page)

//CARGAR OPERACIONES--- hacer loop 😎😎😎😋
for(let i=0; i<clientes.length; i++){
    console.log(clientes[i])
    await cargarCliente(page,browser,clientes[i])
}
})()
















//funciones
async function cargarTransporte(transporte, page){
const radioBtn=await page.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(2) > td:nth-child(2) > input:nth-child(2)")
if(TRANSPORTE==="TERCEROS") radioBtn.evaluate(b=>b.click())
else{
const radioBtn2=await page.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(2) > td:nth-child(2) > input:nth-child(2)")
radioBtn2.evaluate(b=>b.click())
}
[prefijo,cuerpo,sufijo]= transporte.CUIT.split("-")
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(2) > input:nth-child(1)',prefijo)
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(2) > input:nth-child(2)',cuerpo)
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(2) > input:nth-child(3)',sufijo)
//Chasis y acoplado
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(5) > td:nth-child(2) > input:nth-child(1)',transporte.CHASIS)
await page.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(5) > td:nth-child(2) > input:nth-child(2)',transporte.ACOPLADO)

}

async function cargarComprobante(pagina,cliente){
await pagina.select("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(2) > select",cliente.TipoComprobante)
await pagina.waitForTimeout(300)
await pagina.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(8) > tbody > tr:nth-child(3) > td:nth-child(2) > input:nth-child(2)',cliente.RemitoSufijo)
await pagina.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(8) > tbody > tr:nth-child(3) > td:nth-child(2) > input:nth-child(1)',cliente.RemitoPrefijo)
await pagina.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(8) > tbody > tr:nth-child(6) > td:nth-child(2) > input',cliente.Importe)
let btnAceptar=await pagina.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(10) > tbody > tr > td > input:nth-child(1)')
await btnAceptar.evaluate(b=>b.click())
await pagina.waitForTimeout(300)
let btnAceptarOperacion=await pagina.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(11) > tbody > tr > td > input:nth-child(1)')
await btnAceptarOperacion.evaluate(b=>b.click())
}
async function cargarProducto(producto,index,pagina){
let btnAgregar=await pagina.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(7) > tbody > tr:nth-child(1) > td > b > input')
await btnAgregar.evaluate(b=>b.click())
await pagina.waitForTimeout(300)
//TODO HACER LOOP POR CANT DE PRODUCTOS
await pagina.type(`[name="operacionProductoTablaCodigoUnico[${index}]"]`,producto.codigo)
//body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(8) > tbody > tr:nth-child(6) > td:nth-child(2) > input

await pagina.select(`[name="operacionProductoTablaUnidadMedida[${index}]"]`,producto.Unidad)
await pagina.type(`[name="operacionProductoTablaCantidad[${index}]"]`,producto.Cantidad)
await pagina.type(`[name="operacionProductoTablaDetalle[${index}]"]`,producto.Descripcion)
await pagina.type(`[name="operacionProductoTablaUnidadMedidaPropia[${index}]"]`,producto.Unidad2)
await pagina.type(`[name="operacionProductoTablaCantidadPropia[${index}]"]`,producto.Cantidad2)
let btnAceptarProducto=await pagina.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(8) > tbody > tr:nth-child(5) > td:nth-child(8) > input:nth-child(1)')
await btnAceptarProducto.evaluate(b=>b.click())

}

async function cargarCliente(pagina,browser,cliente){
    const BTN_CARGAR_OPERACIONES=await pagina.waitForSelector("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(15) > tbody > tr:nth-child(2) > td > input.botonFormulario2")
await BTN_CARGAR_OPERACIONES.evaluate(b => b.click());
await pagina.waitForTimeout(200)
pages = await browser.pages(); // get all open pages by the browser
let VENTANA_OPERACIONES = pages[pages.length - 1]; // the popup should be the last page opened
//empezamos la carga
[pre,cuerpo, sufijo]=cliente.CUIT.split("-")
await VENTANA_OPERACIONES.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input:nth-child(3)',pre)
await VENTANA_OPERACIONES.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input:nth-child(4)',cuerpo)
await VENTANA_OPERACIONES.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input:nth-child(5)',sufijo)
await VENTANA_OPERACIONES.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input:nth-child(1)',cliente.Calle)
await VENTANA_OPERACIONES.type('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input:nth-child(2)',cliente.Numero)
await VENTANA_OPERACIONES.select("body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > select",cliente.Provincia)

let btnBuscar=await VENTANA_OPERACIONES.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(5) > tbody > tr:nth-child(5) > td > input.botonFormulario2')
await btnBuscar.evaluate(b=>b.click())
await VENTANA_OPERACIONES.waitForTimeout(200)
pages = await browser.pages(); // get all open pages by the browser
const VENTANA_LOCALIDAD = pages[pages.length - 1]; // the popup should be the last page opened
await VENTANA_LOCALIDAD.type('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input:nth-child(1)',cliente.CP)
let btnBuscarLocalidad=await VENTANA_LOCALIDAD.waitForSelector('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > input.botonFormulario2')
await btnBuscarLocalidad.evaluate(b=>b.click())
await VENTANA_LOCALIDAD.waitForTimeout(300)
await VENTANA_LOCALIDAD.select("body > table > tbody > tr > td > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select",cliente.Localidad)
let btnAceptarLocalidad=await VENTANA_LOCALIDAD.waitForSelector('body > table > tbody > tr > td > form > table > tbody > tr:nth-child(6) > td > input:nth-child(1)')
await btnAceptarLocalidad.evaluate(b=>b.click())

for(let i=0; i<cliente.Productos.length; i++){
    await cargarProducto(cliente.Productos[i],i,VENTANA_OPERACIONES)
}

btnAgregar=await VENTANA_OPERACIONES.waitForSelector('body > table > tbody > tr:nth-child(3) > td > form > table:nth-child(9) > tbody > tr:nth-child(1) > td > b > input')
await btnAgregar.evaluate(b=>b.click())
await VENTANA_OPERACIONES.waitForTimeout(300)

console.log('entrò a tipo de comprobante')

await cargarComprobante(VENTANA_OPERACIONES,cliente)

}