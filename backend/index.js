const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Mongoclient = require ('mongodb').MongoClient;
const ObjectId = require ('mongodb').ObjectId;
const path = require('path');
const multer = require('multer');



var dbname = "sampledb";
var client = new Mongoclient('mongodb+srv://admin:admin@cluster0-kxhos.mongodb.net/dbname?retryWrites=true&w=majority',{useNewUrlParser:true}); 
var connection;
client.connect((err, con)=>{

    if(!err)
    {
        connection = con;
        console.log("database connected sucessfully");
    }
    else{
        console.log("database could not connect ");
    }

})

const app = express();
app.use(cors());








app.use(express.static(path.join(__dirname,'uploads')));



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("in destination");
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {


        var collection = connection.db(dbname).collection('publisher');
         collection.insert(req.body, (err,result)=>{
                    if(!err)
                    {
                  
                            req.genId=result.insertedIds['0'];
                            req.isInsertedSuccess = true;
                            cb(null, req.genId+"_"+file.fieldname+".jpg");


                    }
                    else{
                            req.isInsertedSuccess = false;
                            cb(null, "temp.jpg");
                    }
                })


            
     


    }
  })
 
  
  var upload = multer({ storage: storage })


  app.post('/publish',  upload.single('image'), 
                      (req,res)=>{  console.log("in last",);  
                      
                      if(req.isInsertedSuccess)
                      {

                          res.send({status:"ok"})
                     
                          
                      }
                      else {
                          res.send({status:'failed', data:"already exist"})
                      } 
}
)











//app.get('/', (req, res)=>{

  //  res.send({status:"ok", data:"this is a test api"});
//})

//app.get('/user', (req, res)=>{
  //  var id= req.query.id;
    //res.send({status:"ok", data:[{name:"X", age:78, id:id},{name:"Y", age:67}]});
//})

app.get('/getbooks',bodyParser.json(),(req,res)=>{
    console.log(req.body)
    var collection = connection.db(dbname).collection('publisher');
    
    collection.find().toArray((err,docs)=>{
        if(!err && docs.length>0){
            res.send({status:true,data:docs});
                                }
        else{
            res.send({status:false,data:err});
            }
        
    })

})













app.post('/login',bodyParser.json(),(req,res)=>{
    console.log(req.body)
var collection = connection.db(dbname).collection('users');
collection.find(req.body).toArray((err,docs)=>{
    if(!err && docs.length>0){
        res.send({status:"ok",data:docs});
                            }
    else{
        res.send({status:"failed",data:err});
        }
})
})




app.post('/signup',bodyParser.json(),(req,res)=>{
      console.log(req.body)


    var collection = connection.db(dbname).collection('users');
    
    collection.find({email:req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length>0){
                                    console.log("already exist");
                                      res.send({status:"failed",data:"email already exist!!"});
                                }
        else{
                collection.insert(req.body, (err,result)=>{
                if(!err){
                    console.log("registered")
                    res.send({status:"ok",data:"signup sucess"});
                                        }
                else{
                    console.log("failed");
                    res.send({status:"failed",data:err});
                    }
            })
        }
    })
    
    
    })






    // app.post('/publish', bodyParser.json(), (req,res)=>{
    //        console.log(req.body)
    
    //                var collection = connection.db(dbname).collection('publisher');
        
    //                 collection.insert(req.body, (err,result)=>{
    //                 if(!err){
    //                     console.log("published!!!")
    //                     res.send({status:"ok",data:"publish sucessfull!!"});
    //                                         }
    //                 else{
    //                     console.log("failed");
    //                     res.send({status:"failed",data:err});
    //                     }
    //             })
            
    //     })

    




    
        
        
        app.listen(3000,()=>{console.log("server is listening on port 3000")});



