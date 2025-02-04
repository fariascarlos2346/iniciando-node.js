import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {

    res.send("Olá, rota acessada com sucesso!")
})

app.post('/usuarios', (req, res) => {
    res.send("Hello!")
})

app.listen(3000)