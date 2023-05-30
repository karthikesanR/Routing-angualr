app.get('/get',(req,res)=>{
   
    connection.query('select id ,Companyname,since,place,address from company',function (error, results) {
      if (error) {
      console.log(error);
       }
      
     res.json(results)
      
      })
    });