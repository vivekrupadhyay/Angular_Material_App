const mongoose=require('mongoose');
const bcrypt = require("bcrypt");
const Schema=mongoose.Schema;
let User=new Schema({
    firstname:{
        type:String
    },
    lastname:{
    type:String
   },
   email:{
    type:String
   },
    password: {
    type: String,
    require: true,
    min: 4
  },
//   roles: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Role"
//     }],
   mobile:{
       type:String
   },
   gender:{
    type:String
},
//    picture:{
//     type:String
//    }
 },
  {
    collection:'user'
});

User.pre("save",function (next) {
    const user=this;
    bcrypt.hash(user.password,10,function(err,hash){
        if(err){
            return next(err);
        }
        user.password=hash;
        next();
    });
});


module.exports=mongoose.model('User',User);