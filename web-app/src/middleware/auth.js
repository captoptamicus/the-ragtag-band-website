const jwt=require("jsonwebtoken");
const DATA=require("../models/candidiate");

//JWT USER AUTHENTICATION PAGE 


const auth=async (req,res,next)=>{
    try{
    const token=req.cookies.jwt;
    const verification=jwt.verify(token,process.env.SECRET_KEY);
    const user=await DATA.findOne({_id:verification._id});
    req.token=token;
    req.user=user;
    next();
    }
    catch(error){
        res.status(404).send("<h1>PPlease login first<h1>")
        console.log(error);
    }
}

//END


module.exports = auth;