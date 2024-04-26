const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine' ,'ejs');

let pessoas = [
    {nome: 'Carlos', password: 894},
    {nome: 'Leonardo', password: 143},
    {nome: 'Gabriel' , password: 123}
];



// Transições de processos (eventos) da aplicação web ; 

app.get('/', (req, res) => res.render('index'));

app.get('/login', (req, res) => res.render('login'));

app.post('/login', (req, res) => {
    let usuarioErrado = true;

    for(let i = 0 ; i < pessoas.length ; i++){
        if(pessoas[i].nome === req.body.nome && pessoas[i].password == req.body.password){
            res.render('loginEfetuado');
            console.log('Nome:' + pessoas[i].nome + '/' + 'senha:' + pessoas[i].password + '/' + 'Status : usuário logado');
            usuarioErrado = false;
            break;
        }
    }

    if (usuarioErrado) {
        res.render('loginInvalido');
    }
});

app.listen(3000, () => console.log('Server ready'));
