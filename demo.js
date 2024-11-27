let express=require('express');
let app=express();
app.get("/",(req,res)=>{
let data={
    color:"yellow",
    height:200,
    width:200,
    margin:10,
    tags:25
}
res.render("demo1.ejs",data);
})
app.listen(6060);