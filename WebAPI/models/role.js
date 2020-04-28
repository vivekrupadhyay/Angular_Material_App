const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Role=new Schema({
    name:{
        type:String
    },
    isactive:{
        type:Boolean
    }
})


module.exports=mongoose.model('Role',Role);