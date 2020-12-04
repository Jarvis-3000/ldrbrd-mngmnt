import express from "express"
const app=express()

app.use((req,res,next)=>{
    res.send("developer Backend running...")
})

export default app