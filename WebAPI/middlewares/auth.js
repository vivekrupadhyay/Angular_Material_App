const jwt=require("jsonwebtoken");
const config=require("config");

module.exports=function (req,res,next) {
    if(!config.get("requestAuth"))return next();
    const token=req.header("x-auth-token");
    if(!token) return res.status(401).send("Access denied. No token provided.");
    try {
        
    } catch (error) {
        
    }
}