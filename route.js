let express = require('express');

let app = express();

let port = 8080;

app.listen(port,()=>{
console.log(`server is listening at port ${port}`)});


// app.use((req,res)=>{
// console.log("req recieved");

// res.send("kya haal chal bhai");

// })



//req for home directory
app.get('/',(req,res)=>{
console.log("home request aya hai");

res.send("i am the home page");
})



//req for contact page
app.get('/contact',(req,res)=>{
    console.log("contact request aya hai");
    
    res.send("i am the contact page new");
    })


    // req for login page
    app.get('/login',(req,res)=>{
        console.log("login request aya hai");
        
        res.send("i am the login page");
        })



        // for others
app.get('*',(req,res)=>{
    res.send("galat req hai bro");
})

