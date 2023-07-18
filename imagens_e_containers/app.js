const express = require('express') //chamando o framework
const app = express()  //inicializando
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá minha imagem!')
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
});