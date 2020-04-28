const express=require('express');
const app=express();
const contactRoutes=express.Router();

let Contactus=require('../models/contactus');
contactRoutes.route('/add').post(function(req,res){
    console.log("contactus")
    let contactus=new Contactus(req.body);
    contactus.save().then(contact=>{
        res.status(200).json({'status':'success','msg':'Contactus added successfully.'});
    }).catch(err=>{
        res.status(409).send({'status':'failure','msg':'unable to save into database.'})
    });
});
contactRoutes.route('/').get(function(req,res){
    Contactus.find(function(err,contact){
        if(err){
            res.status(400).send({'status':'failure','msg':'something went wrong.'});
        }
        else{
            res.status(200).json({'status':'success','roles':contact});
        }
    });
});
module.exports=contactRoutes;