// let btnCOT = document.querySelector('button')
// btnCOT.addEventListener('click',e=>{
//     fetch('/pepe').then(x=>x.json()).then(x=>console.log(x))
//     alert('ppepepe')




// })
let productosArray= [
    {codigo:41157, nombre:"Sal gruesa lavada y seca Dos Anclas x 25 kg", multiplicador:25},
    {codigo:42162, nombre:"Sal entrefina lavada y seca Dos Anclas x 25 kg", multiplicador:25},
    {codigo:43144, nombre:"Sal fina lavada y seca Dos Anclas x 25 kg", multiplicador:25},
    {codigo:1001, nombre:"Sal a granel Dos Anclas", multiplicador:1},
    {codigo:21100, nombre:"Bolsones de sal gruesa común x 1000 kg. Dos Anclas", multiplicador:1000},
    {codigo:21105, nombre:"Bolsas de sal gruesa común x 50 kg. Dos Anclas", multiplicador:50},
    {codigo:21120, nombre:"Bolsas de sal gruesa común x 25 kg. Dos Anclas", multiplicador:25},
    {codigo:22110, nombre:"Bolsas de sal entrefina común x 50 kg. Dos Anclas", multiplicador:50},
    {codigo:22121, nombre:"Bolsas de sal entrefina común x 25 kg. Dos Anclas", multiplicador:25},
    {codigo:31110, nombre:"Bolsas de sal gruesa lavada x 50 kg. Dos Anclas", multiplicador:50},
    {codigo:32115, nombre:"Bolsas de sal entrefina lavada x 50 kg. Dos Anclas", multiplicador:50},







]
//objeto de transportes
let transportes={
    venturir:"20-10802715-1",
    venturih:"20-28844351-4",
    solidus:"30-71078345-0"
}
//objeto de clientes
let clientes={
    solidus:{
        CUIT:"30-71078345-0",
        Provincia:"M",
        Calle:"Alvarez Condarco",
        Numero:"183",
        CP:"5570",
        Localidad:"10664",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    cersosimo:{
        CUIT:"23-13430645-9",
        Provincia:"M",
        Calle:"Acceso Saavedra s/n",
        Numero:"0",
        CP:"5592",
        Localidad:"12484",
        TipoComprobante:" ", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
    simplot:{
        CUIT:"30-71092007-5",
        Provincia:"M",
        Calle:"Ruta Nacional 7 km. 1068",
        Numero:"0",
        CP:"5507",
        Localidad:"15420",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
    vildoza:{
        CUIT:"30-50577381-7",
        Provincia:"M",
        Calle:"Alsina s/n",
        Numero:"0",
        CP:"5511",
        Localidad:"10619",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
    agroisme:{
        CUIT:"30-70746037-3",
        Provincia:"M",
        Calle:"Severo del Castillo",
        Numero:"5050",
        CP:"5527",
        Localidad:"14829",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
        fusari:{
        CUIT:"30-71032188-0",
        Provincia:"M",
        Calle:"2 de mayo",
        Numero:"9690",
        CP:"5527",
        Localidad:"14829",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
        incoagro:{
        CUIT:"30-63014374-4",
        Provincia:"M",
        Calle:"25 de mayo",
        Numero:"325",
        CP:"5501",
        Localidad:"10738",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
        rpb:{
        CUIT:"30-66313737-5",
        Provincia:"M",
        Calle:"CARRIL RODRIGUEZ PEÑA KM. 10.5",
        Numero:"0",
        CP:"5515",
        Localidad:"15485",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
    aleder:{
        CUIT:"30-71151379-1",
        Provincia:"M",
        Calle:"Ruta Prov. 50 esq. Carril Montecasero",
        Numero:"1",
        CP:"5570",
        Localidad:"10664",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    atilio:{
        CUIT:"30-50473832-5",
        Provincia:"M",
        Calle:"Urquiza",
        Numero:"1650",
        CP:"5521",
        Localidad:"21718",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
    camino:{
        CUIT:"30-70783743-4",
        Provincia:"M",
        Calle:"Urquiza",
        Numero:"9890",
        CP:"5517",
        Localidad:"20921",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    },
    sanjavier:{
        CUIT:"30-60562401-0",
        Provincia:"M",
        Calle:"Alsina",
        Numero:"1283",
        CP:"5513",
        Localidad:"15436",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    irsaiyr:{
        CUIT:"30-52532274-9",
        Provincia:"M",
        Calle:"Acceso Este",
        Numero:"3280",
        CP:"5521",
        Localidad:"21718",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    gabutti:{
        CUIT:"30-70705723-4",
        Provincia:"M",
        Calle:"c chimba",
        Numero:"0",
        CP:"5584",
        Localidad:"16596",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    durang:{
        CUIT:"30-67636134-7",
        Provincia:"M",
        Calle:"DURAND ",
        Numero:"80000",
        CP:"5527",
        Localidad:"14829",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    agroindustria:{
        CUIT:"30-54118003-2",
        Provincia:"M",
        Calle:"RUTAS 143 Y 165",
        Numero:"0",
        CP:"5603",
        Localidad:"18785",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    laghi:{
        CUIT:"20-16376051-8",
        Provincia:"M",
        Calle:"Av. Alvear Este",
        Numero:"353",
        CP:"5620",
        Localidad:"10590",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
    winner:{
        CUIT:"30-67200098-6",
        Provincia:"M",
        Calle:"Julio A. Roca",
        Numero:"1457",
        CP:"5501",
        Localidad:"10738",
        TipoComprobante:"", RemitoPrefijo:"", RemitoSufijo:"", Importe:"",
    }, 
}

// let Solidus={
//     CUIT:"30-71078345-0",
//     Provincia:"M",
//     Calle:"Alvarez Condarco",
//     Numero:"183",
//     CP:"5570",
//     Localidad:"10664",
//     TipoComprobante:"1", RemitoPrefijo:"4", RemitoSufijo:"20363", Importe:"270219.90",
//     // Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" },{codigo:"250100",Unidad:"1", Cantidad:"7500", Descripcion:"Sal a fina seca DA", Unidad2:"kilogramos", Cantidad2:"7500" }]
// }
let destinariosCOT=[]
let Productos=[]
let Transporte={}
//array product example
//Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" }]


function pushArray(arr, inputText, inputNumber){
    console.log(inputText.querySelector('option:checked'))
arr.push({
    codigo:"250100",
    Unidad:"1",
    Cantidad:inputNumber.value*inputText.querySelector('option:checked').dataset.multiplicador +"",
    Descripcion:inputText.value,
    Unidad2:"kilogramos", 
    Cantidad2:inputNumber.value*inputText.querySelector('option:checked').dataset.multiplicador+"",
})
}
document.addEventListener('dragover',e=>e.preventDefault())
createHTMLProduct()

const productos= document.querySelector('.productos')
const select_cliente=document.querySelector('#select_cliente')
const datosRemito= document.querySelector('.datos')
const datosTransporte= document.querySelector('.transporte')

//evito la recarga de página
datosRemito.addEventListener('submit',e=>e.preventDefault())
datosTransporte.addEventListener('submit',e=>e.preventDefault())


productos.addEventListener('drop',e=>{
    console.log('DROP')
    let draggingHTML= document.querySelector('.dragging');
    pushArray(Productos,draggingHTML.childNodes[1],draggingHTML.childNodes[3])
    console.log({...clientes[select_cliente.value],Productos})
    draggingHTML.childNodes[1].setAttribute('disabled',"true")
    draggingHTML.childNodes[3].setAttribute('readonly',"true")

    e.target.appendChild(draggingHTML)
    createHTMLProduct()
})
function createHTMLProduct(){
    document.querySelector('.productoNuevo').insertAdjacentHTML('beforeend',`
    <div class="producto" draggable="true">
    <select name="" id="">
    ${
        productosArray.map(p=>'<option data-multiplicador="'+p.multiplicador+'" value="'+p.nombre+ '">'+p.codigo+'</option>').join("")
    }
    </select>
    <input type="number" name="" id="" placeholder="unidades">
</div>
    `)
    let draggable=[...document.querySelectorAll('[draggable="true"]')].at(-1)
    draggable.addEventListener('dragstart',e=>{e.target.classList.add('dragging')
    // e.dataTransfer.setData("text/plain", e.target.childNodes[4].);
})
    draggable.addEventListener('dragend',e=>e.target.classList.remove('dragging'))
}
//acá hago el add:
let add= document.querySelector('#add')
add.addEventListener('click',()=>{
    let remito= new FormData(datosRemito)
    let cliente={...clientes[select_cliente.value],Productos,...Object.fromEntries(remito)}
    destinariosCOT.push(cliente)
    Productos=[]
    productos.innerHTML=""
})
let cotGenerator= document.querySelector('#cotGenerator')
cotGenerator.addEventListener('submit',e=>{
    e.preventDefault()
    console.log(destinariosCOT)

    let transporte= Object.fromEntries(new FormData(datosTransporte))

    fetch('http://127.0.0.1:3000/pepe',{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            "transporte":{...transporte,CUIT:transporte.CUIT==="propio"?clientes[select_cliente.value].CUIT:transportes[transporte.CUIT]},
            "clientes":destinariosCOT
        })
    }).then(e=>e.json()).then(e=>{alert(e.message);destinariosCOT=[];Productos=[];Transporte={}})

})