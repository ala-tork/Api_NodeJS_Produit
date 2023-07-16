const express = require('express')
const mongoose = require('./DB/ConnectionDB');
const ProduitService = require('./Routers/Produit');
const app = express()
const port = 3000
app.use(express.json());
//app.use(cros());

app.use( '/api' , ProduitService );

app.listen(  
    3000 
    ,
    ()=>{
        console.log(`server work !!!! on ${port}`);
    }
    
);