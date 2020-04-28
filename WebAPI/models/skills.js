const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Skill=new Schema({
    name:{
        type:String
    },
    isactive:{
        type:Boolean
    }
});

module.exports=mongoose.model("Skill",Skill);