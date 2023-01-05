var express = require('express');
var router = express.Router();
const MongoClient =require('mongodb').MongoClient; 
const url= "mongodb+srv://elisa403:louise102940334@cluster0.xgqidqz.mongodb.net/?retryWrites=true&w=majority";
const recordd=[];
router.get("/chat", function (req, res) {
  let q= req.query;
  if(q.user && q.say){
      let chatobj={user:q.user,say:q.say,jr:[1,1,1,1,1,1,1,1,1,1,1,1,1,1],rw:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],dd:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],fw:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],sj:[1,1,1,1,1,1,1,1,1,1,1,1,1,1],zt:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],dz:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],fyl:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],wp:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],st:0,ss:0};
      recordd.push(chatobj);
  }
  res.writeHead(200,{"Content-Type":"application/json"});
  res.write(JSON.stringify(recordd));
  res.end();
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
        res.send(recordd);
        console.log(recordd);
        db.close();
      });
    });
});
//sadasda
module.exports = router;

//,rw:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],dd:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],fw:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],sj:[1,1,1,1,1,1,1,1,1,1,1,1,1,1],zt:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// localStorage.setItem("節日",[1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("人物",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("地點",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("方位",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("時間",[1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("狀態",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("動作",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("副詞連接詞",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("物品",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// localStorage.setItem("score_total",0);
// localStorage.setItem("score_spend",0);