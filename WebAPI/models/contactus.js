const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Contactus=new Schema({
username:{
    type:String
},
email:{
    type:String
},
message:{
    type:String
}
});

module.exports=mongoose.model('Contactus',Contactus);