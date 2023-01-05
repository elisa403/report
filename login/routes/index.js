var express = require('express');
var router = express.Router();
const MongoClient =require('mongodb').MongoClient; 
const url= "mongodb+srv://elisa403:louise102940334@cluster0.xgqidqz.mongodb.net/?retryWrites=true&w=majority";
const recordd=[];
router.get("/chat", function (req, res) {
  let q= req.query;
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    const dbo =db.db("mydb");
    dbo.collection("log").find({}).toArray(function (err, recordd) {
      if (err) throw err;
      for (i in recordd) {
        if(recordd[i].user == q.user && recordd[i].say == q.say){
          //console.log("aaaa",recordd[i]);
          res.writeHead(200,{"Content-Type":"application/json"});
          res.write(JSON.stringify([recordd[i]]));
          break;
        }
      }
      db.close();
      res.end();
    });
  });
});
// POST service
router.get("/chat/clear", function (req, res) {
    recordd.length=0;
    res.end();
});
router.get("/chat/save",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    const dbo =db.db("mydb");
    dbo.collection("log").insertMany(recordd, function (err, res) {
    console.log("log");
      if (err) throw err;
      console.log(`multiple documents were inserted`);
      db.close();
    });
  });
});
router.get("/chat/reload",function(req,res){
    MongoClient.connect(url,function(err,db){
      if(err)throw err;
      const dbo =db.db("mydb");
      dbo.collection("log").find({}).toArray(function (err, recordd) {
        if (err) throw err;
        if(res.user == q.user && res.say == q.say) res.send(recordd);
        console.log(recordd);
        db.close();
      });
    });
});
//sadasda
module.exports = router;

//,rw:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],dd:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],fw:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],sj:[1,1,1,1,1,1,1,1,1,1,1,1,1,1],zt:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]