const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let EducationDetails=new Schema({
    heighest_qualification:{
        type:String
    }
});
module.exports=mongoose.model("EducationDetails",EducationDetails);
