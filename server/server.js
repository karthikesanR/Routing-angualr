
const express = require("express");

var mysql = require("mysql");
var cors=require('cors')

app = express();

app.use(express.json());
app.use(cors());


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password@123',
  database : 'Routing'
});
 
connection.connect();
app.get('/get',(req,res)=>{
   
    connection.query('select id ,Ename,age,phone,place from employee',function (error, results) {
      if (error) {
      console.log(error);
       }
      
     res.json(results)
      
      })
    });
    app.get('/getall',(req,res)=>{
   
        connection.query('select id ,Companyname,since,place,address from company',function (error, results) {
          if (error) {
          console.log(error);
           }
          
         res.json(results)
          
          })
        });


        app.get('/get/:id',(req,res)=>{
   
          connection.query('select Ename,age,phone,place from employee where id=? ',[req.params.id],function (error, results) {
            if (error) {
            console.log(error);
             }
            
           res.json(results)
            
            })
          });
          app.get('/getall/:id',(req,res)=>{
   
            connection.query('select Companyname,since,place,address from company where id=?',[req.params.id],function (error, results) {
              if (error) {
              console.log(error);
               }
              
             res.json(results)
              
              })
            });
   
   app.listen(3000, () => {
     console.log("listening port 3000");
   });

 