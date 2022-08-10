const express = require('express');
const cors = require('cors');

const models=require('./models');
let cliente=models.Cliente;
let itempedido=models.ItemPedido;
let pedido=models.Pedido;
let servico=models.Servico;

const app=express();
app.use(cors());
app.get('/', function(req,res){
    res.send('ola casa');
});
app.get('/servicos', async(req, res)=>{
    await servico.create({
        nome:"HTML/CSS",
        descricao:"Páginas staticas",
        createAt: new Date(),
        updateAt: new Date(),
    });
    res.send('Serviço criado')
});
app.get('/clientes', function(req,res){
    res.send('ola casa bonita');
});


let port=process.env.PORT || 3001;
app.listen(port,(req,res)=>{
    console.log('Servidor Ativo:http://localhost:3001');
});