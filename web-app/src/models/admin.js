const mon=require("mongoose");
const bcrypt=require("bcryptjs");
const validator=require("validator");
const loginData=new mon.Schema({
     userid:{type:String, unique:[true,"This Email already present kindly choose another"],
     validate(val){
         if(!validator.isEmail(val)){
             throw new Error("Invalid Email")
         }
     }},
     userpass:{type:String,required:true}
})

const LoginInfo=new mon.model("LoginInfo",loginData);

const onetimeadmin=async function(){
     try{
          var excuted=false;
const insertData=new LoginInfo({
     userid:"admin123@gmail.com",
     userpass:"admin123ragtag"
   })

const result=await insertData.save();
return function(){
     if(!excuted){
          executed=true;
     }
}
}catch(err){
     console.log(err)
}

}

onetimeadmin();

loginData.pre("save",async function(next){
        if(this.isModified("userpass")){
             this.userpass=await bcrypt.hash(this.userpass,10);
          }
          
          next();
     })
     
     

module.exports = LoginInfo;