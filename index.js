let express=require('express');
let app=express();
app.get("/",(req,res)=>{
    let data={
        name:"pratik",
        mobile:123456,
        email:"pratik@gmail.com"
    };
    res.render('index.ejs',data);
})
app.listen(1001);