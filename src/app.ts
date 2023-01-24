import prisma from "./config/database.js";
import express from "express";

const app = express();

app.use(express.json());

app.get('/health', (req,res)=>{
    res.send("ok");
})

app.listen(5000);


