let express = require('express');

let app = express();

let port = 4000;

app.listen(port,()=>{
    console.log("server is listening");
});


app.use((req,res)=>{
    console.log("request recieved");
    // res.send("<h1>hy i am a boy</h1>");
    res.send("hy i am a boy");
});