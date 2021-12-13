require('dotenv').config()
const express=require("express");
const path=require('path');
const ResultData=require("./models/result");
const hbs=require('hbs');
const DATA=require("./models/candidiate");
const LoginInfo=require("./models/admin");
const jwt=require("jsonwebtoken");
var nodemailer=require("nodemailer");
const auth=require("./middleware/auth")
const cookieParser=require("cookie-parser");
const upload=require("express-fileupload");
require("./database/connection");
//db
const app=express();
const port = process.env.PORT || 8000;

//setting the path..
const staticpath=path.join(__dirname,'../public');
const templatepath=path.join(__dirname,'../template/views');
const partialspath=path.join(__dirname,'../template/partials');

//middlewares
app.use(express.static(staticpath));
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialspath);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(upload());
//routing..>>
app.get("/",(req,res)=>{
    res.render("header")
});
app.get("/login",(req,res)=>{
  res.render("login")
})
app.post("/newsletter",()=>{
  // email database of candidiates..
})
app.get("/register",(req,res)=>{
  res.render("register")
})


app.get("/apply",(req,res)=>{
  res.render("apply")
})
//email


app.get("/directaction", (req,res)=>{
  res.render("directaction")
})


app.get("/mutualaid", (req,res)=>{
  res.render("mutualaid")
})

var transport=nodemailer.createTransport(
  {
    service:'aol',
    auth:{
      user:"joshhermsen@aol.com",
      pass:"testpasswordforthiswebsite"
    }
  }
)
//

//

app.post("/apply",async (req,res)=>{
  try{
  const name=req.body.canname;
  const email=req.body.canemail;
  const state=req.body.stateop;
  const year=req.body.yearop;
  const level=req.body.federal;
  const position=req.body.position;
  const political_identity=req.body.politics;
  const group=req.body.party;
  const twitter=req.body.twitacc;
  const insert=new DATA({
    Name:name,
    Email:email,
    State:state,
    Year:year,
    Level:level,
    Position:position,
    Political_identity:political_identity,
    endrose_group:group,
    Twitter:twitter,
    date_of_election:req.body.elecdate,
    candidiate_biography:req.body.biography,
    campaign_website:req.body.campweb,
    feedback_of_candidiate:req.body.ec26,
    MMT:req.body.ec133,
   ans1:req.body.race,
   ans2:req.body.race1,
   ans3:req.body.re,
   ans4:req.body.ec,
   ans5:req.body.ec1,
   ans6:req.body.ec2,
   ans7:req.body.ec3,
   ans8:req.body.ec4,
   ans9:req.body.ec5,
   ans10:req.body.ec6,
   ans11:req.body.ec7,
   ans12:req.body.ec8,
   ans13:req.body.ec9,
   ans14:req.body.ec10,
   ans15:req.body.ec11,
   ans16:req.body.ec12,
   ans17:req.body.ec13,
   ans18:req.body.ec14,
   ans19:req.body.ec15,
   ans20:req.body.ec16,
   ans21:req.body.ec17,
   ans22:req.body.ec18,
   ans23:req.body.ec19,
   ans24:req.body.ec20,
   ans25:req.body.ec21,
   ans26:req.body.ec22,
   ans27:req.body.ec23,
   ans28:req.body.ec24,
   ans29:req.body.ec25,
   ans30:req.body.ec28,
   ans31:req.body.ec29,
   ans32:req.body.ec30,
   ans33:req.body.ec31,
   ans34:req.body.ec32,
   ans35:req.body.ec33,
   ans36:req.body.ec34,
   ans37:req.body.ec35,
   ans38:req.body.ec36,
   ans39:req.body.ec37,
   ans40:req.body.ec38,
   ans41:req.body.ec39,
   ans42:req.body.ec40,
   ans43:req.body.ec41,
   ans44:req.body.ec42,
   ans45:req.body.ec43,
   ans46:req.body.ec44,
   ans47:req.body.ec45,
   ans48:req.body.ec46,
   ans49:req.body.ec47,
   ans50:req.body.ec48,
   ans51:req.body.ec49,
   ans52:req.body.ec50,
   ans53:req.body.ec51,
   ans54:req.body.ec52,
   ans55:req.body.ec53,
   ans56:req.body.ec54,
   ans57:req.body.ec55,
   ans58:req.body.ec56,
   ans59:req.body.ec57,
   ans60:req.body.ec58,
   ans61:req.body.ec59,
   ans62:req.body.ec60,
   ans63:req.body.ec61,
   ans64:req.body.ec62,
   ans65:req.body.ec63,
   ans66:req.body.ec64,
   ans67:req.body.ec65,
   ans68:req.body.ec66,
   ans69:req.body.ec67,
   ans70:req.body.ec68,
   ans71:req.body.ec69,
   ans72:req.body.ec70,
   ans73:req.body.ec71,
   ans74:req.body.ec72,
   ans75:req.body.ec73,
   ans76:req.body.ec74,
   ans77:req.body.ec75,
   ans78:req.body.ec76,
   ans79:req.body.ec77,
   ans80:req.body.ec78,
   ans81:req.body.ec79,
   ans82:req.body.ec80,
   ans83:req.body.ec81,
   ans84:req.body.ec82,
   ans85:req.body.ec83,
   ans86:req.body.ec84,
   ans87:req.body.ec85,
   ans88:req.body.ec86,
   ans89:req.body.ec87,
   ans90:req.body.ec88,
   ans91:req.body.ec89,
   ans92:req.body.ec90,
   ans93:req.body.ec91,
   ans94:req.body.ec92,
   ans95:req.body.ec93,
   ans96:req.body.ec94,
   ans97:req.body.ec95,
   ans98:req.body.ec96,
   ans99:req.body.ec97,
   ans100:req.body.ec98,
   ans101:req.body.ec99,
   ans102:req.body.ec100,
   ans103:req.body.ec101,
   ans104:req.body.ec102,
   ans105:req.body.ec103,
   ans106:req.body.ec104,
   ans107:req.body.ec105,
   ans108:req.body.ec106,
   ans109:req.body.ec107,
   ans110:req.body.ec108,
   ans111:req.body.ec109,
   ans112:req.body.ec110,
   ans113:req.body.ec111,
   ans114:req.body.ec112,
   ans115:req.body.ec113,
   ans116:req.body.ec114,
   ans117:req.body.ec115,
   ans118:req.body.ec116,
   ans119:req.body.ec117,
   ans120:req.body.ec118,
   ans121:req.body.ec119,
   ans122:req.body.ec120,
   ans123:req.body.ec121,
   ans124:req.body.ec122,
   ans125:req.body.ec123,
   ans126:req.body.ec124,
   ans127:req.body.ec125,
   ans128:req.body.ec126,
   ans129:req.body.ec127,
   ans130:req.body.ec128,
   ans131:req.body.ec129,
   ans132:req.body.ec130,
   ans133:req.body.ec131,
   ans134:req.body.ec132,
   ans135:req.body.ec134,
   ans136:req.body.ec135,
   ans137:req.body.ec136,
   ans138:req.body.ec137,
   ans139:req.body.ec138,
   ans140:req.body.ec139,
   ans141:req.body.ec140,
   ans142:req.body.ec141,
   ans143:req.body.ec142,
   ans144:req.body.ec143,
   ans145:req.body.ec144,
   ans146:req.body.ec145,
   ans147:req.body.ec146,
   ans148:req.body.ec147,
   ans149:req.body.ec148,
   ans150:req.body.ec149,
   ans151:req.body.ec150,
   ans152:req.body.ec151,
   ans153:req.body.ec152,
   ans154:req.body.ec153,
   ans155:req.body.ec154,
   ans156:req.body.ec155,
   ans157:req.body.ec156,
   ans158:req.body.ec157,
   ans159:req.body.ec158,
   ans160:req.body.ec159,
   ans161:req.body.ec160,
   ans162:req.body.ec161,
   ans163:req.body.ec162,
   ans164:req.body.ec163,
   ans165:req.body.ec164,
   ans166:req.body.ec165,
   ans167:req.body.ec166,
   ans168:req.body.ec167,
   ans169:req.body.ec168,
   ans170:req.body.ec169,
   ans171:req.body.ec170,
   ans172:req.body.ec171,
   ans173:req.body.ec172,
   ans174:req.body.ec173,
   ans175:req.body.ec174,
   ans176:req.body.ec175,
   ans177:req.body.ec176,
   ans178:req.body.ec177,
   ans179:req.body.ec178,
   ans180:req.body.ec179,
   ans181:req.body.ec180,
   ans182:req.body.ec181,
   ans183:req.body.ec182,
   ans184:req.body.ec183,
   ans185:req.body.ec184,
   ans186:req.body.ec185,
   ans187:req.body.ec186,
   ans188:req.body.ec187,
   ans189:req.body.ec188,
   ans190:req.body.ec189,
   ans191:req.body.ec190,
   ans192:req.body.ec193,
   ans193:req.body.ec194,
   ans194:req.body.ec195,
   ans195:req.body.ec196,
   ans196:req.body.ec197,
   ans197:req.body.ec198,
   ans198:req.body.ec199,
   ans199:req.body.ec200,
   ans200:req.body.ec201,
   ans201:req.body.ec202,
   ans202:req.body.ec203,
   ans203:req.body.ec204,
   ans204:req.body.ec205,
   ans205:req.body.ec206,
   ans206:req.body.ec207,
   ans207:req.body.ec208,
   ans208:req.body.ec209,
   ans209:req.body.ec210,
   ans210:req.body.ec211,
   ans211:req.body.ec212,
   ans212:req.body.ec213,
   ans213:req.body.ec214,
   ans214:req.body.ec215,
   ans215:req.body.ec216,
   ans216:req.body.ec217,
   ans217:req.body.ec218,
   ans218:req.body.ec219,
   ans219:req.body.ec220,
   ans220:req.body.ec221,
   ans221:req.body.ec222,
   ans222:req.body.ec223,
   ans223:req.body.ec224,
   ans224:req.body.ec225,
   ans225:req.body.ec226,
   ans226:req.body.ec227,
   ans227:req.body.ec228,
   ans228:req.body.ec229,
   ans229:req.body.ec230,
   ans230:req.body.ec231,
   ans231:req.body.eq232,
   ans232:req.body.ec233,
   ans233:req.body.ec234,
   ans234:req.body.ec235,
   ans235:req.body.ec236,
   ans236:req.body.ec237,
   ans237:req.body.ec238,
   ans238:req.body.ec239,
   ans239:req.body.ec240,
   ans240:req.body.ec241,
   ans241:req.body.ec242,
   ans242:req.body.ec243,
   ans243:req.body.ec244,
  //  *******************local answers not cals part*******************
  ans244:req.body.ec245,
  ans245:req.body.ec246,
  ans246:req.body.ec247,
  ans247:req.body.eq248,
   ans248:req.body.ec249,
   ans249:req.body.ec250,
   ans250:req.body.ec251,
   ans251:req.body.ec252,
   ans252:req.body.ec253,
   ans253:req.body.ec254,
   ans254:req.body.ec255,
   ans255:req.body.ec256,
   ans256:req.body.ec257,
   ans257:req.body.eq258,
   ans258:req.body.ec259,
   ans259:req.body.ec260,
   ans260:req.body.ec261,
   ans261:req.body.ec262,
   ans262:req.body.ec263,
   ans263:req.body.ec264,
   ans264:req.body.ec265,
   ans265:req.body.ec266,
   ans266:req.body.ec267,
   ans267:req.body.eq268,
   ans268:req.body.ec269,
   ans269:req.body.ec270,
   ans270:req.body.ec271,
   ans271:req.body.ec272,
   ans272:req.body.ec273,
   ans273:req.body.ec274,
   ans274:req.body.ec275,
   ans275:req.body.ec276,
   ans276:req.body.ec277,
   ans277:req.body.eq278,
   ans278:req.body.ec279,
   ans279:req.body.ec280,
   ans280:req.body.ec281,
   ans281:req.body.ec282,
   ans282:req.body.ec283,
   ans283:req.body.ec284,
   ans284:req.body.ec285,
   ans285:req.body.ec286,
   ans286:req.body.ec287,
   ans287:req.body.eq288,
   ans288:req.body.ec289,
   ans289:req.body.ec290,
   ans290:req.body.ec291,
   ans291:req.body.ec292,
   ans292:req.body.ec293,
   ans293:req.body.ec294,
   ans294:req.body.ec295,
   ans295:req.body.ec296,
   ans296:req.body.ec297,
   ans297:req.body.ec298,
   ans298:req.body.ec299,
   ans299:req.body.ec27,
   lower_voting_age:req.body.ec304,
   money_from_pac:req.body.ec305,
   universal_income:req.body.ec306,
   emp_medical_leave:req.body.ec307,
   school_chooice:req.body.ec308,
   pentagon_endlesswar:req.body.ec309
   //local ans part
  })
//generate token here...
    const token= await insert.generateAuthToken();
    res.cookie("jwt",token,{});
    ////token end.

  
  res.status(201).render("result");
   

}
catch(err){
  console.log(err);
}
})

app.get("/result",(req,res)=>{
  res.render("result")
})
app.post("/result",auth,async (req,res)=>{
  
  const tokens=req.cookies.jwt;
  const verification=jwt.verify(tokens,process.env.SECRET_KEY);
  const user=await DATA.findOne({_id:verification._id});
  
  var countt=0;
  if(user.ans1=="Yes"  ||  user.ans1=="Yes & it's Priority"){countt++}
  if(user.ans2=="Yes"  ||  user.ans2=="Yes & it's Priority"){countt++}
  if(user.ans3=="Yes"  ||  user.ans3=="Yes & it's Priority"){countt++}
  if(user.ans4=="Yes"  ||  user.ans4=="Yes & it's Priority"){countt++}
  if(user.ans5=="Yes"  ||  user.ans5=="Yes & it's Priority"){countt++}
  if(user.ans6=="Yes"  ||  user.ans6=="Yes & it's Priority"){countt++}
  if(user.ans7=="Yes"  ||  user.ans7=="Yes & it's Priority"){countt++}
  if(user.ans8=="Yes"  ||  user.ans8=="Yes & it's Priority"){countt++}
  if(user.ans9=="Yes"  ||  user.ans9=="Yes & it's Priority"){countt++}
  if(user.ans10=="Yes" || user.ans10=="Yes & it's Priority"){countt++}
  if(user.ans11=="Yes" || user.ans11=="Yes & it's Priority"){countt++}
  if(user.ans12=="Yes" || user.ans12=="Yes & it's Priority"){countt++}
  if(user.ans13=="Yes" || user.ans13=="Yes & it's Priority"){countt++}
  if(user.ans14=="Yes" || user.ans14=="Yes & it's Priority"){countt++}
  if(user.ans15=="Yes" || user.ans15=="Yes & it's Priority"){countt++}
  if(user.ans16=="Yes" || user.ans16=="Yes & it's Priority"){countt++}
  if(user.ans17=="Yes" || user.ans17=="Yes & it's Priority"){countt++}
  if(user.ans18=="Yes" || user.ans18=="Yes & it's Priority"){countt++}
  if(user.ans19=="Yes" || user.ans19=="Yes & it's Priority"){countt++}
  if(user.ans20=="Yes" || user.ans20=="Yes & it's Priority"){countt++}
  if(user.ans21=="Yes" || user.ans21=="Yes & it's Priority"){countt++}
  if(user.ans22=="Yes" || user.ans22=="Yes & it's Priority"){countt++}
  if(user.ans23=="Yes" || user.ans23=="Yes & it's Priority"){countt++}
  if(user.ans24=="Yes" || user.ans24=="Yes & it's Priority"){countt++}
  if(user.ans25=="Yes" || user.ans25=="Yes & it's Priority"){countt++}
  if(user.ans26=="Yes" || user.ans26=="Yes & it's Priority"){countt++}
  if(user.ans27=="Yes" || user.ans27=="Yes & it's Priority"){countt++}
  if(user.ans28=="Yes" || user.ans28=="Yes & it's Priority"){countt++}
  if(user.ans29=="Yes" || user.ans29=="Yes & it's Priority"){countt++}
  if(user.ans30=="Yes" || user.ans30=="Yes & it's Priority"){countt++}
  if(user.ans31=="Yes" || user.ans31=="Yes & it's Priority"){countt++}
  if(user.ans32=="Yes" || user.ans32=="Yes & it's Priority"){countt++}
  if(user.ans33=="Yes" || user.ans33=="Yes & it's Priority"){countt++}
  if(user.ans34=="Yes" || user.ans34=="Yes & it's Priority"){countt++}
  if(user.ans35=="Yes" || user.ans35=="Yes & it's Priority"){countt++}
  if(user.ans36=="Yes" || user.ans36=="Yes & it's Priority"){countt++}
  if(user.ans37=="Yes" || user.ans37=="Yes & it's Priority"){countt++}
  if(user.ans38=="Yes" || user.ans38=="Yes & it's Priority"){countt++}
  if(user.ans39=="Yes" || user.ans39=="Yes & it's Priority"){countt++}
  if(user.ans40=="Yes" || user.ans40=="Yes & it's Priority"){countt++}
  if(user.ans41=="Yes" || user.ans41=="Yes & it's Priority"){countt++}
  if(user.ans42=="Yes" || user.ans42=="Yes & it's Priority"){countt++}
  if(user.ans43=="Yes" || user.ans43=="Yes & it's Priority"){countt++}
  if(user.ans44=="Yes" || user.ans44=="Yes & it's Priority"){countt++}
  if(user.ans45=="Yes" || user.ans45=="Yes & it's Priority"){countt++}
  if(user.ans46=="Yes" || user.ans46=="Yes & it's Priority"){countt++}
  if(user.ans47=="Yes" || user.ans47=="Yes & it's Priority"){countt++}
  if(user.ans48=="Yes" || user.ans48=="Yes & it's Priority"){countt++}
  if(user.ans49=="Yes" || user.ans49=="Yes & it's Priority"){countt++}
  if(user.ans50=="Yes" || user.ans50=="Yes & it's Priority"){countt++}
  if(user.ans51=="Yes" || user.ans51=="Yes & it's Priority"){countt++}
  if(user.ans52=="Yes" || user.ans52=="Yes & it's Priority"){countt++}
  if(user.ans53=="Yes" || user.ans53=="Yes & it's Priority"){countt++}
  if(user.ans54=="Yes" || user.ans54=="Yes & it's Priority"){countt++}
  if(user.ans55=="Yes" || user.ans55=="Yes & it's Priority"){countt++}
  if(user.ans56=="Yes" || user.ans56=="Yes & it's Priority"){countt++}
  if(user.ans57=="Yes" || user.ans57=="Yes & it's Priority"){countt++}
  if(user.ans58=="Yes" || user.ans58=="Yes & it's Priority"){countt++}
  if(user.ans59=="Yes" || user.ans59=="Yes & it's Priority"){countt++}
  if(user.ans60=="Yes" || user.ans60=="Yes & it's Priority"){countt++}
  if(user.ans61=="Yes" || user.ans61=="Yes & it's Priority"){countt++}
  if(user.ans62=="Yes" || user.ans62=="Yes & it's Priority"){countt++}
  if(user.ans63=="Yes" || user.ans63=="Yes & it's Priority"){countt++}
  if(user.ans64=="Yes" || user.ans64=="Yes & it's Priority"){countt++}
  if(user.ans65=="Yes" || user.ans65=="Yes & it's Priority"){countt++}
  if(user.ans66=="Yes" || user.ans66=="Yes & it's Priority"){countt++}
  if(user.ans67=="Yes" || user.ans67=="Yes & it's Priority"){countt++}
  if(user.ans68=="Yes" || user.ans68=="Yes & it's Priority"){countt++}
  if(user.ans69=="Yes" || user.ans69=="Yes & it's Priority"){countt++}
  if(user.ans70=="Yes" || user.ans70=="Yes & it's Priority"){countt++}
  if(user.ans71=="Yes" || user.ans71=="Yes & it's Priority"){countt++}
  if(user.ans72=="Yes" || user.ans72=="Yes & it's Priority"){countt++}
  if(user.ans73=="Yes" || user.ans73=="Yes & it's Priority"){countt++}
  if(user.ans74=="Yes" || user.ans74=="Yes & it's Priority"){countt++}
  if(user.ans75=="Yes" || user.ans75=="Yes & it's Priority"){countt++}
  if(user.ans76=="Yes" || user.ans76=="Yes & it's Priority"){countt++}
  if(user.ans77=="Yes" || user.ans77=="Yes & it's Priority"){countt++}
  if(user.ans78=="Yes" || user.ans78=="Yes & it's Priority"){countt++}
  if(user.ans79=="Yes" || user.ans79=="Yes & it's Priority"){countt++}
  if(user.ans80=="Yes" || user.ans80=="Yes & it's Priority"){countt++}
  if(user.ans81=="Yes" || user.ans81=="Yes & it's Priority"){countt++}
  if(user.ans82=="Yes" || user.ans82=="Yes & it's Priority"){countt++}
  if(user.ans83=="Yes" || user.ans83=="Yes & it's Priority"){countt++}
  if(user.ans84=="Yes" || user.ans84=="Yes & it's Priority"){countt++}
  if(user.ans85=="Yes" || user.ans85=="Yes & it's Priority"){countt++}
  if(user.ans86=="Yes" || user.ans86=="Yes & it's Priority"){countt++}
  if(user.ans87=="Yes" || user.ans87=="Yes & it's Priority"){countt++}
  if(user.ans88=="Yes" || user.ans88=="Yes & it's Priority"){countt++}
  if(user.ans89=="Yes" || user.ans89=="Yes & it's Priority"){countt++}
  if(user.ans90=="Yes" || user.ans90=="Yes & it's Priority"){countt++}
  if(user.ans91=="Yes" || user.ans91=="Yes & it's Priority"){countt++}
  if(user.ans92=="Yes" || user.ans92=="Yes & it's Priority"){countt++}
  if(user.ans93=="Yes" || user.ans93=="Yes & it's Priority"){countt++}
  if(user.ans94=="Yes" || user.ans94=="Yes & it's Priority"){countt++}
  if(user.ans95=="Yes" || user.ans95=="Yes & it's Priority"){countt++}
  if(user.ans96=="Yes" || user.ans96=="Yes & it's Priority"){countt++}
  if(user.ans97=="Yes" || user.ans97=="Yes & it's Priority"){countt++}
  if(user.ans98=="Yes" || user.ans98=="Yes & it's Priority"){countt++}
  if(user.ans99=="Yes" || user.ans99=="Yes & it's Priority"){countt++}
  if(user.ans100=="Yes" || user.ans100=="Yes & it's Priority"){countt++}
  if(user.ans101=="Yes" || user.ans101=="Yes & it's Priority"){countt++}
  if(user.ans102=="Yes" || user.ans102=="Yes & it's Priority"){countt++}
  if(user.ans103=="Yes" || user.ans103=="Yes & it's Priority"){countt++}
  if(user.ans104=="Yes" || user.ans104=="Yes & it's Priority"){countt++}
  if(user.ans105=="Yes" || user.ans105=="Yes & it's Priority"){countt++}
  if(user.ans106=="Yes" || user.ans106=="Yes & it's Priority"){countt++}
  if(user.ans107=="Yes" || user.ans107=="Yes & it's Priority"){countt++}
  if(user.ans108=="Yes" || user.ans108=="Yes & it's Priority"){countt++}
  if(user.ans109=="Yes" || user.ans109=="Yes & it's Priority"){countt++}
  if(user.ans110=="Yes" || user.ans110=="Yes & it's Priority"){countt++}
  if(user.ans111=="Yes" || user.ans111=="Yes & it's Priority"){countt++}
  if(user.ans112=="Yes" || user.ans112=="Yes & it's Priority"){countt++}
  if(user.ans113=="Yes" || user.ans113=="Yes & it's Priority"){countt++}
  if(user.ans114=="Yes" || user.ans114=="Yes & it's Priority"){countt++}
  if(user.ans115=="Yes" || user.ans115=="Yes & it's Priority"){countt++}
  if(user.ans116=="Yes" || user.ans116=="Yes & it's Priority"){countt++}
  if(user.ans117=="Yes" || user.ans117=="Yes & it's Priority"){countt++}
  if(user.ans118=="Yes" || user.ans118=="Yes & it's Priority"){countt++}
  if(user.ans119=="Yes" || user.ans119=="Yes & it's Priority"){countt++}
  if(user.ans120=="Yes" || user.ans120=="Yes & it's Priority"){countt++}
  if(user.ans121=="Yes" || user.ans121=="Yes & it's Priority"){countt++}
  if(user.ans122=="Yes" || user.ans122=="Yes & it's Priority"){countt++}
  if(user.ans123=="Yes" || user.ans123=="Yes & it's Priority"){countt++}
  if(user.ans124=="Yes" || user.ans124=="Yes & it's Priority"){countt++}
  if(user.ans125=="Yes" || user.ans125=="Yes & it's Priority"){countt++}
  if(user.ans126=="Yes" || user.ans126=="Yes & it's Priority"){countt++}
  if(user.ans127=="Yes" || user.ans127=="Yes & it's Priority"){countt++}
  if(user.ans128=="Yes" || user.ans128=="Yes & it's Priority"){countt++}
  if(user.ans129=="Yes" || user.ans129=="Yes & it's Priority"){countt++}
  if(user.ans130=="Yes" || user.ans130=="Yes & it's Priority"){countt++}
  if(user.ans131=="Yes" || user.ans131=="Yes & it's Priority"){countt++}
  if(user.ans132=="Yes" || user.ans132=="Yes & it's Priority"){countt++}
  if(user.ans134=="Yes" || user.ans134=="Yes & it's Priority"){countt++}
  if(user.ans135=="Yes" || user.ans135=="Yes & it's Priority"){countt++}
  if(user.ans136=="Yes" || user.ans136=="Yes & it's Priority"){countt++}
  if(user.ans137=="Yes" || user.ans137=="Yes & it's Priority"){countt++}
  if(user.ans138=="Yes" || user.ans138=="Yes & it's Priority"){countt++}
  if(user.ans139=="Yes" || user.ans139=="Yes & it's Priority"){countt++}
  if(user.ans140=="Yes" || user.ans140=="Yes & it's Priority"){countt++}
  if(user.ans141=="Yes" || user.ans141=="Yes & it's Priority"){countt++}
  if(user.ans142=="Yes" || user.ans142=="Yes & it's Priority"){countt++}
  if(user.ans143=="Yes" || user.ans143=="Yes & it's Priority"){countt++}
  if(user.ans144=="Yes" || user.ans144=="Yes & it's Priority"){countt++}
  if(user.ans145=="Yes" || user.ans145=="Yes & it's Priority"){countt++}
  if(user.ans146=="Yes" || user.ans146=="Yes & it's Priority"){countt++}
  if(user.ans147=="Yes" || user.ans147=="Yes & it's Priority"){countt++}
  if(user.ans148=="Yes" || user.ans148=="Yes & it's Priority"){countt++}
  if(user.ans149=="Yes" || user.ans149=="Yes & it's Priority"){countt++}
  if(user.ans150=="Yes" || user.ans150=="Yes & it's Priority"){countt++}
  if(user.ans151=="Yes" || user.ans151=="Yes & it's Priority"){countt++}
  if(user.ans152=="Yes" || user.ans152=="Yes & it's Priority"){countt++}
  if(user.ans153=="Yes" || user.ans153=="Yes & it's Priority"){countt++}
  if(user.ans154=="Yes" || user.ans154=="Yes & it's Priority"){countt++}
  if(user.ans155=="Yes" || user.ans155=="Yes & it's Priority"){countt++}
  if(user.ans156=="Yes" || user.ans156=="Yes & it's Priority"){countt++}
  if(user.ans157=="Yes" || user.ans157=="Yes & it's Priority"){countt++}
  if(user.ans158=="Yes" || user.ans158=="Yes & it's Priority"){countt++}
  if(user.ans159=="Yes" || user.ans159=="Yes & it's Priority"){countt++}
  if(user.ans160=="Yes" || user.ans160=="Yes & it's Priority"){countt++}
  if(user.ans161=="Yes" || user.ans161=="Yes & it's Priority"){countt++}
  if(user.ans162=="Yes" || user.ans162=="Yes & it's Priority"){countt++}
  if(user.ans163=="Yes" || user.ans163=="Yes & it's Priority"){countt++}
  if(user.ans164=="Yes" || user.ans164=="Yes & it's Priority"){countt++}
  if(user.ans165=="Yes" || user.ans165=="Yes & it's Priority"){countt++}
  if(user.ans166=="Yes" || user.ans166=="Yes & it's Priority"){countt++}
  if(user.ans167=="Yes" || user.ans167=="Yes & it's Priority"){countt++}
  if(user.ans168=="Yes" || user.ans168=="Yes & it's Priority"){countt++}
  if(user.ans169=="Yes" || user.ans169=="Yes & it's Priority"){countt++}
  if(user.ans170=="Yes" || user.ans170=="Yes & it's Priority"){countt++}
  if(user.ans171=="Yes" || user.ans171=="Yes & it's Priority"){countt++}
  if(user.ans172=="Yes" || user.ans172=="Yes & it's Priority"){countt++}
  if(user.ans173=="Yes" || user.ans173=="Yes & it's Priority"){countt++}
  if(user.ans174=="Yes" || user.ans174=="Yes & it's Priority"){countt++}
  if(user.ans175=="Yes" || user.ans175=="Yes & it's Priority"){countt++}
  if(user.ans176=="Yes" || user.ans176=="Yes & it's Priority"){countt++}
  if(user.ans177=="Yes" || user.ans177=="Yes & it's Priority"){countt++}
  if(user.ans178=="Yes" || user.ans178=="Yes & it's Priority"){countt++}
  if(user.ans179=="Yes" || user.ans179=="Yes & it's Priority"){countt++}
  if(user.ans180=="Yes" || user.ans180=="Yes & it's Priority"){countt++}
  if(user.ans181=="Yes" || user.ans181=="Yes & it's Priority"){countt++}
  if(user.ans182=="Yes" || user.ans182=="Yes & it's Priority"){countt++}
  if(user.ans183=="Yes" || user.ans183=="Yes & it's Priority"){countt++}
  if(user.ans184=="Yes" || user.ans184=="Yes & it's Priority"){countt++}
  if(user.ans185=="Yes" || user.ans185=="Yes & it's Priority"){countt++}
  if(user.ans186=="Yes" || user.ans186=="Yes & it's Priority"){countt++}
  if(user.ans187=="Yes" || user.ans187=="Yes & it's Priority"){countt++}
  if(user.ans188=="Yes" || user.ans188=="Yes & it's Priority"){countt++}
  if(user.ans189=="Yes" || user.ans189=="Yes & it's Priority"){countt++}
  if(user.ans190=="Yes" || user.ans190=="Yes & it's Priority"){countt++}
  if(user.ans191=="Yes" || user.ans191=="Yes & it's Priority"){countt++}
  if(user.ans192=="Yes" || user.ans192=="Yes & it's Priority"){countt++}
  if(user.ans193=="Yes" || user.ans193=="Yes & it's Priority"){countt++}
  if(user.ans194=="Yes" || user.ans194=="Yes & it's Priority"){countt++}
  if(user.ans195=="Yes" || user.ans195=="Yes & it's Priority"){countt++}
  if(user.ans196=="Yes" || user.ans196=="Yes & it's Priority"){countt++}
  if(user.ans197=="Yes" || user.ans197=="Yes & it's Priority"){countt++}
  if(user.ans198=="Yes" || user.ans198=="Yes & it's Priority"){countt++}
  if(user.ans199=="Yes" || user.ans199=="Yes & it's Priority"){countt++}
  if(user.ans200=="Yes" || user.ans200=="Yes & it's Priority"){countt++}
  if(user.ans201=="Yes" || user.ans201=="Yes & it's Priority"){countt++}
  if(user.ans202=="Yes" || user.ans202=="Yes & it's Priority"){countt++}
  if(user.ans203=="Yes" || user.ans203=="Yes & it's Priority"){countt++}
  if(user.ans204=="Yes" || user.ans204=="Yes & it's Priority"){countt++}
  if(user.ans205=="Yes" || user.ans205=="Yes & it's Priority"){countt++}
  if(user.ans206=="Yes" || user.ans206=="Yes & it's Priority"){countt++}
  if(user.ans207=="Yes" || user.ans207=="Yes & it's Priority"){countt++}
  if(user.ans208=="Yes" || user.ans208=="Yes & it's Priority"){countt++}
  if(user.ans209=="Yes" || user.ans209=="Yes & it's Priority"){countt++}
  if(user.ans210=="Yes" || user.ans210=="Yes & it's Priority"){countt++}
  if(user.ans211=="Yes" || user.ans211=="Yes & it's Priority"){countt++}
  if(user.ans212=="Yes" || user.ans212=="Yes & it's Priority"){countt++}
  if(user.ans213=="Yes" || user.ans213=="Yes & it's Priority"){countt++}
  if(user.ans214=="Yes" || user.ans214=="Yes & it's Priority"){countt++}
  if(user.ans215=="Yes" || user.ans215=="Yes & it's Priority"){countt++}
  if(user.ans216=="Yes" || user.ans216=="Yes & it's Priority"){countt++}
  if(user.ans217=="Yes" || user.ans217=="Yes & it's Priority"){countt++}
  if(user.ans218=="Yes" || user.ans218=="Yes & it's Priority"){countt++}
  if(user.ans219=="Yes" || user.ans219=="Yes & it's Priority"){countt++}
  if(user.ans220=="Yes" || user.ans220=="Yes & it's Priority"){countt++}
  if(user.ans221=="Yes" || user.ans221=="Yes & it's Priority"){countt++}
  if(user.ans222=="Yes" || user.ans222=="Yes & it's Priority"){countt++}
  if(user.ans223=="Yes" || user.ans223=="Yes & it's Priority"){countt++}
  if(user.ans224=="Yes" || user.ans224=="Yes & it's Priority"){countt++}
  if(user.ans225=="Yes" || user.ans225=="Yes & it's Priority"){countt++}
  if(user.ans226=="Yes" || user.ans226=="Yes & it's Priority"){countt++}
  if(user.ans227=="Yes" || user.ans227=="Yes & it's Priority"){countt++}
  if(user.ans228=="Yes" || user.ans228=="Yes & it's Priority"){countt++}
  if(user.ans229=="Yes" || user.ans229=="Yes & it's Priority"){countt++}
  if(user.ans230=="Yes" || user.ans230=="Yes & it's Priority"){countt++}
  if(user.ans231=="Yes" || user.ans231=="Yes & it's Priority"){countt++}
  if(user.ans232=="Yes" || user.ans232=="Yes & it's Priority"){countt++}
  if(user.ans233=="Yes" || user.ans233=="Yes & it's Priority"){countt++}
  if(user.ans234=="Yes" || user.ans234=="Yes & it's Priority"){countt++}
  if(user.ans235=="Yes" || user.ans235=="Yes & it's Priority"){countt++}
  if(user.ans236=="Yes" || user.ans236=="Yes & it's Priority"){countt++}
  if(user.ans237=="Yes" || user.ans237=="Yes & it's Priority"){countt++}
  if(user.ans238=="Yes" || user.ans238=="Yes & it's Priority"){countt++}
  if(user.ans239=="Yes" || user.ans239=="Yes & it's Priority"){countt++}
  if(user.ans240=="Yes" || user.ans240=="Yes & it's Priority"){countt++}
  if(user.ans241=="Yes" || user.ans241=="Yes & it's Priority"){countt++}
  if(user.ans242=="Yes" || user.ans242=="Yes & it's Priority"){countt++}
  if(user.ans243=="Yes" || user.ans243=="Yes & it's Priority"){countt++}
  
  console.log(countt);
  //percentage calculation..>>>
  const cal=(countt / 243);
  const calc=(cal * 100).toFixed();
  console.log(calc)
  res.render("result",{
    percent:calc
  })
 const rd=new ResultData({
  calculation_res:calc,
  User_name:user.Name,
  Email:user.Email,
  State:user.State,
  Year:user.Year,
  Level:user.Level
 }) 
var mailoptions={
  from:"joshhermsen1211@gmail.com",
  to:"theragtagband@protonmail.com",
  subject:"candidate answer average result ",
  text: " Candidate Name: "+user.Name+ "\n Year to run: "+user.Year+" \n Email: "+user.Email+" \n State: "+user.State+" Level: "+user.Level+" \n position: "+user.Position+" \n Twitter acc: "+user.Twitter+" \n result average: "+calc
}
transport.sendMail(mailoptions,function(error,info){
  if(error){
    console.log(error)
  }
  else{
    console.log("Email sent"+info.response);
  }
  })
//

//remove cookiee
req.user.tokens = req.user.tokens.filter((elem)=>{
  return elem.token !== req.token
})
res.clearCookie("jwt");
await req.user.save()
 //

})
//
//here conformation email should send to user.by nodejs


//


app.get("/policy",(req,res)=>{
  res.render("policy")
})


app.get("/admin",(req,res)=>{ 
  res.render("admin")

})


app.post("/admin",async(req,res)=>{
try{
  const uid=req.body.user;
  const upass=req.body.upass;
  const data=await LoginInfo.findOne({userid:uid});
  console.log(data)
  console.log(uid);
  if(uid==data.userid && upass==data.userpass){
    const resultss= await ResultData.find().sort("State:1");
    res.render("records",{resultss})
 
  }
  
  else{
    res.send("Your user name or password is inncorrect please try aggain");
  }

}catch(err){
  console.log(err)
}
})
app.get("/records",(req,res)=>{
  res.render("records")
})
app.post("/records",async (req,res)=>{
  try{
  const da=req.body.uemm;
 // const daa=JSON.stringify(da);
  const rss=await DATA.findOne({Email:da});
//console.log(rss.Email)
  res.render("userdata",{rss})

}catch(err){
  console.log(err);
}
})
app.get("/userdata",(req,res)=>{
  res.render("userdata")
})
app.get("/candidiate",async(req,res)=>{
  try{
  const resultsss= await ResultData.find().sort("State : 1");
  
  res.render("candidiate",{resultsss})  
  

 // console.log(ssaa)
}catch(err){
  console.log(err)
}
})
app.post("/candidiate",async(req,res)=>{
  try{
    const daa=req.body.uemmm;
    // const daa=JSON.stringify(da);
    const rss=await DATA.findOne({Email:daa});
    res.render("publicans",{rss})
  }catch(err){
    console.log(err)
  }
})

app.get("/:id",async(req,res)=>{
 const aall=req.params.id;
 console.log(aall)
const fuser=await ResultData.findById({_id:aall});
const dusero=await DATA.findOne({Email:fuser.Email});
const rpduser=await ResultData.findByIdAndDelete({_id:aall});
 res.render("deleted",{rpduser});
})
app.get("/deleted",(req,res)=>{
  res.render("deleted")
})
app.listen(port,"0.0.0.0",()=>{
  console.log('server is runnig');
})

