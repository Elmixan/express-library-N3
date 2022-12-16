const express = require("express");

const app=express()

app.get('/',(req,res)=>{
    // res.json("json rendered text")
    let employees=[
        {id:1,name:'Togrul',age:20},
        {id:2,name:'Farkhad',age:24},
        {id:3,name:'Murad',age:32}
    ]
    res.json(employees)
})

app.listen(3000,()=>{
    console.log('Server started on 3000 port')
})