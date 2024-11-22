import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('src'))

// function soma(a, b) {
//     return a + b
// }

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a, b) => a + b

const soma = a => a + a

const mensagem = soma(3)

app.get('/', (req, res) => {
    res.render('index', {mensagem})
})

// app.get('/', function(req, res){
//     res.render('index', {mensagem})
// })


app.listen(3000)