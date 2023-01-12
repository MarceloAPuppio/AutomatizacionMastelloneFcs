const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/pepe',(req,res)=>{
    console.log('im back')

    res.json({pepe:"solito"})
    require('./COT.js')
})

const PUERTO = process.env.PORT || 3000
app.listen(PUERTO,()=>{
    console.log('servidor listening puerto')
})