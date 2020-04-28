const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Article=new Schema({
title:{
    type:String
},
short_description:{
    type:String
},
long_description:{
    type:String
},
picture:{
    type:string
},
comment:{
    type:string
},
isactive:{
    type:Boolean
}
});

module.exports=mongoose.model("Article",Article);
