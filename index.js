import express from "express";

const app=express()

app.get("/",(req,res)=>{
   res.status(200).json({message:"Hello This Side Saurabh Singh Backend Developer"})
})
app.get("/useringage",(req,res)=>{
    res.status(200).json({message:"UserIngage Show Succesful When This feature Avail On Server"})
})

const port=3000
app.listen(port,()=>{
    console.log("Your Response")
})