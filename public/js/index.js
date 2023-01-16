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
let Solidus={
    CUIT:"30-71078345-0",
    Provincia:"M",
    Calle:"Alvarez Condarco",
    Numero:"183",
    CP:"5570",
    Localidad:"10664",
    TipoComprobante:"1", RemitoPrefijo:"4", RemitoSufijo:"20363", Importe:"270219.90",
    // Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" },{codigo:"250100",Unidad:"1", Cantidad:"7500", Descripcion:"Sal a fina seca DA", Unidad2:"kilogramos", Cantidad2:"7500" }]
}
let destinariosCOT=[]
let Productos=[]
//array product example
//Productos:[{codigo:"250100",Unidad:"1", Cantidad:"28000", Descripcion:"Sal a granel Dos Anclas", Unidad2:"kilogramos", Cantidad2:"28000" }]


function pushArray(arr, inputText, inputNumber){
    console.log(inputText.querySelector('option:checked'))
arr.push({
    codigo:"250100",
    Unidad:"1",
    Cantidad:inputNumber.value*inputText.querySelector('option:checked').dataset.multiplicador,
    Descripcion:inputText.value,
    Unidad2:"kilogramos", 
    Cantidad2:inputNumber.value*inputText.querySelector('option:checked').dataset.multiplicador,
})
}
document.addEventListener('dragover',e=>e.preventDefault())
createHTMLProduct()
const productos= document.querySelector('.productos')

productos.addEventListener('drop',e=>{
    console.log('DROP')
    pushArray(Productos,document.querySelector('.dragging').childNodes[1],document.querySelector('.dragging').childNodes[3])
    console.log({...Solidus,Productos})
    e.target.appendChild(document.querySelector('.dragging'))
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
    <input type="number" name="" id="">
</div>
    `)
    let draggable=[...document.querySelectorAll('[draggable="true"]')].at(-1)
    draggable.addEventListener('dragstart',e=>{e.target.classList.add('dragging')
    // e.dataTransfer.setData("text/plain", e.target.childNodes[4].);
})
    draggable.addEventListener('dragend',e=>e.target.classList.remove('dragging'))
    console.log(draggable)
}
//acá hago el add:
let add= document.querySelector('#add')
add.addEventListener('click',()=>{
    destinariosCOT.push({...Solidus,Productos})
    Productos=[]
    productos.innerHTML=""
    console.log(destinariosCOT)
})