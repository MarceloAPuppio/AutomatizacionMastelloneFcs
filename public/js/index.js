// let btnCOT = document.querySelector('button')
// btnCOT.addEventListener('click',e=>{
//     fetch('/pepe').then(x=>x.json()).then(x=>console.log(x))
//     alert('ppepepe')
// })
document.addEventListener('dragover',e=>e.preventDefault())
createHTMLProduct()
const productos= document.querySelector('.productos')

productos.addEventListener('drop',e=>{
    console.log('DROP')
    e.target.appendChild(document.querySelector('.dragging'))
    createHTMLProduct()
})
function createHTMLProduct(){
    document.querySelector('.productoNuevo').insertAdjacentHTML('beforeend',`
    <div class="producto" draggable="true">
    <select name="" id="">
        <option value="21105">21105</option>
        <option value="41157" title="Sal gruesa seca">41157</option>
        <option value="42162"></option>
        <option value="43144"></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>
    <input type="number" name="" id="">
</div>
    `)
    let draggable=[...document.querySelectorAll('[draggable="true"]')].at(-1)
    draggable.addEventListener('dragstart',e=>e.target.classList.add('dragging'))
    draggable.addEventListener('dragend',e=>e.target.classList.remove('dragging'))
    console.log(draggable)
}