let btnCOT = document.querySelector('button')
btnCOT.addEventListener('click',e=>{
    fetch('/pepe').then(x=>x.json()).then(x=>console.log(x))
    alert('ppepepe')
})