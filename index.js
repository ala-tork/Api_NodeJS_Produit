const express = require('express')
const mongoose = require('./DB/ConnectionDB');
const ProduitService = require('./Routers/Produit');

const cors = require('cors')
const port = 3000
const app = express();

app.use(express.json());


app.use(cors());

app.use( '/api' , ProduitService );

app.listen(  
    3000 
    ,
    ()=>{
        console.log(`server work !!!! on ${port}`);
    }
    
);