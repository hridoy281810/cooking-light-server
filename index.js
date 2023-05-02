const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const chefData = require('./data/chefData.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('new server running')
})
 
app.get('/chefData',(req,res)=>{
    res.send(chefData)
})

app.get('/chefData/:id', (req,res)=>{
    const id = req.params.id;
    const singleChef = chefData.find(chef => chef.id === id)
    res.send(singleChef)
})

app.listen(port,()=>{
    console.log(`Example app listening on port: ${port}`)
})

