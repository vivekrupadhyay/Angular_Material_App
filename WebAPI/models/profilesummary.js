const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let ProfileSummary=new Schema({
    summary:{
        type:String
    }
});
module.exports=ProfileSummary;