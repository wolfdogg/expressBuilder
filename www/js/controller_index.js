var express=require("express"),router=express.Router();router.get("/",function(e,r,s){r.render("index",{title:"Express"})}),module.exports=router;