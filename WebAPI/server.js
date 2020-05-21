const express = require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
const bodyParser = require('body-parser');
 const cors = require('cors');
// var corOptions={
//   origin:"http://hocalhost:4200"
// };
// app.use(cors(corOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var expressJwt = require('express-jwt');
console.log(expressJwt);
//----------------------------------Connection------------------------------------------//

const db = 'mongodb+srv://viveku:Vivek@316@cluster0-o4svi.gcp.mongodb.net/mits?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useUnifiedTopology:true,
        useNewUrlParser: true,
        useCreateIndex: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('Can not connect to database'+err));

//----------------------------------endConnection--------------------------------------------//
const userRoute=require('./routes/user.route');
const contactusRoute=require('./routes/contactus.route');
//----------------------------------Middleware--------------------------------------//
app.use(bodyParser.json());
// app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/////--------------------------------Routes----------------------------------------------//////
app.use('/user',userRoute);
app.use('/contact',contactusRoute);
app.get('/', function(req, res){
    res.send("Hello World!");
 });
var port = process.env.NODE_ENV === 'production' ? 80 : 3000;
app.listen(port, () => { console.log('Server is running...'+port) });