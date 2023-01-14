const express = require('express')
const app = express()
require('puppeteer')

const {COT}= require('./COT')

app.use(express.static('public'))
app.get('/pepe',async (req,res)=>{
    console.log('im back')

    res.json({pepe:"solito"})
    //VOY a recibir un arreglo de clientes con sus respectivos productos
    await COT();
})

const PUERTO = process.env.PORT || 3000
app.listen(PUERTO,()=>{
    console.log('servidor listening puerto')
})