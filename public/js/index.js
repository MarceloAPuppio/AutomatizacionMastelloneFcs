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
    }).then(e=>{destinariosCOT=[];Productos=[];Transporte={}})
})