const express = require('express');

const app = express();

app.get('/', (req, res)=>{

    res.send({status:"ok", data:"this is a test api"});
})

app.get('/user', (req, res)=>{
    var id= req.query.id;
    res.send({status:"ok", data:[{name:"X", age:78, id:id},{name:"Y", age:67}]});
})

app.listen(3000, ()=>{console.log("server is listining on port 3000")});