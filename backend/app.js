import express from "express"
const app=express()

app.use((req,res,next)=>{
    res.send("Backend running...")
})

export default app