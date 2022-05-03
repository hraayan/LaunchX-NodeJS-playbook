const express = require('express')

const app = express()

const port = 3000

app. get('/', (req, res) =>{
    res.send("Hola mundo")
})

//inicializar app

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})

app.get('/launchx', (req, res) =>{
    res.send('bienvenidos a launchx')
})

app.get('/explorers', (req, res) => {
    const explorer = {name:"harry gomez", msg:"holi"}
    res.send(explorer)
})

//query params

app.get('/explorers/:explorerName', (req, res) =>{
    res.send(req.params)
})