const express = require('express')
const cors= require("cors")
const app = express()
require('puppeteer')

const {COT}= require('./COT')

app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.get('/pepe',async (req,res)=>{
    console.log('im back')

    res.json({pepe:"solito"})
    //VOY a recibir un arreglo de clientes con sus respectivos productos
    await COT();
})
app.post('/pepe',async (req,res)=>{
    console.log("tpte",req.body.transporte)
    console.log("cliente",req.body.clientes[0])
    try{
        await COT(req.body.clientes,req.body.transporte)
        res.json({message:"COT realizado con éxito"})
    }
    catch(e){
        res.json({message:e.message})

    }


})

const PUERTO = process.env.PORT || 3000
app.listen(PUERTO,()=>{
    console.log('servidor listening puerto')
})