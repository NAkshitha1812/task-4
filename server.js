const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
   res.send("Blog Backend Running");
});

app.listen(5000, ()=>{
   console.log("Server Started on http://localhost:5000");
});