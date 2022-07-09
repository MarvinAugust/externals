const express = require('express')
const app = express()
const axios = require('axios')

app.listen(3000, ()=>{
})

const json = require('./GoT.json')

app.get('/game-of-thrones/json', (req, res)=>{
    res.json(json)
})

app.get('/game-of-thrones/url', (req, res)=>{
    axios.get('https://thronesapi.com/api/v2/Characters').then(result=>{
        res.json(result.data)
    })
})