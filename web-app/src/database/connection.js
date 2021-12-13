const mon=require("mongoose");
mon.connect("mongodb://0.0.0.0:27017/ragtagCandidiateDb").then(()=>{
    console.log("connection is successfull")
}).catch((err)=>{
    console.log(err)
})