const express=require('express');
const app=express();
const userRoutes=express.Router();  

let User=require('../models/User');

//Api to add user

userRoutes.route('/add').post(function(req,res){
let user=new User(req.body);
user.save().then(user=>{
    res.status(200).json({'status':'success','msg':'user added successfully.'});
   }).catch(err=>{
    res.status(409).send({'status':'failure','msg':'unable to save into database'});
 });
});

// api to get user

userRoutes.route('/').get(function(req,res){
    User.find(function(err,users){
        if(err){
            res.status(400).send({'status':'failure','msg':'something went wrong'});
        }
        else{
            res.status(200).json({'status': 'success','users': users});
        }
    });
});
//Api to get edit user
userRoutes.route('/edit/:id').get(function(req,res){
    let id=req.params.id;
    User.findById(id,function(err,user){
        if(err){
            res.status(400).send({'status':'failure','msg':'something went wrong'});
        }
        else{
            res.status(200).json({'status': 'success','user': user});
        } 
    });
});
//api to update user
userRoutes.route('/update/:id').post(function(req,res){
    User.findById(req.params.id,function(err,user){
        if(!user){
            res.status(400).send({'status':'failure','msg':'unable to find data.'});
        }
        else{
            user.firstname=req.body.firstname;
            user.lastname=req.params.lastname;
            user.email = req.body.email;
            user.mobile=req.body.mobile;
            user.gender=req.body.gender;
            user.save().then(a=>{
                res.status(200).json({'status':'success','msg':'update completed.'});
            });
        }
    });
});
// api for delete
userRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err,){
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
      }
      else {
        res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
      }
    });
  });
  

module.exports=userRoutes;