const express = require("express")
const { default: mongoose } = require("mongoose")
const bodyparser = require("body-parser")
const route = require("./routes/route.js")
<<<<<<< HEAD
const multer= require('multer')

const app = express()
app.use(bodyparser.json())

=======
const multer=require("multer")
const { AppConfig } = require('aws-sdk');

const app = express()
app.use(bodyparser.json())
>>>>>>> 70377cfcd45456c7d00efafb0db1c0b727b2f22a
app.use(multer().any())

mongoose.connect("mongodb+srv://bookManagement:doreamon@bookmanagecluster.2bamja3.mongodb.net/Group15Database"
    ,
    { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => console.log(err))

app.use("/", route)


app.listen(process.env.PORT || 3000, function () {
    console.log("express app running on port" + (process.env.PORT || 3000))
});
