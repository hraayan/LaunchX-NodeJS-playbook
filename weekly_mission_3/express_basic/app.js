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

//http methods


app .get('/v1/explorers', (req,res) =>{
    console.log(`Api explorers get all request ${new Date()}`)
    const explorer1 = {id:1, name:"Harry 1"}
    const explorer2 = {id:2, name:"Harry 2"}
    const explorer3 = {id:3, name:"Harry 3"}
    const explorer4 = {id:4, name:"Harry 4"}
    const explorer5 = {id:5, name:"Harry 5"}
    const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]
    res.status(200).json(explorers)
})
//get explorer by id
app .get('/v1/explorers/:id', (req,res) =>{
    console.log(`Api explorers get all request ${new Date()}`)
    console.log(`getting explorer with id: ${req.params.id}`)
    const explorer1 = {id:1, name:"Harry 1"}
    const explorer2 = {id:2, name:"Harry 2"}
    const explorer3 = {id:3, name:"Harry 3"}
    const explorer4 = {id:4, name:"Harry 4"}
    const explorer5 = {id:5, name:"Harry 5"}
    const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]
    res.status(200).json(explorer1)
})