import express from "express"
const app=express()

app.use((req,res,next)=>{
    res.send("Backend Running...")
})

export default app