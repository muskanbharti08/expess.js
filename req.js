let express = require('express');
let app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("server is listening at port ",port)
});

app.use(
    (req,res)=>{
        console.log("request recieved")
    }
);