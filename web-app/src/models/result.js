const mon=require("mongoose");

const resultData=new mon.Schema({
    calculation_res:{type:String},
    User_name:{type:String},
    Email:{type:String},
    State:{type:String},
    Year:{type:String},
    Level:{type:String}
})

const ResultData=new mon.model('ResultData',resultData);

module.exports=ResultData;