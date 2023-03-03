const express = require('express')
const router= express.Router()
const usercontroller=require("../controllers/userController")
const bookcontrolller=require("../controllers/bookController")
const middle= require("../middlewares/middleware")
const review= require("../controllers/reviewController")
<<<<<<< HEAD
const aws= require("aws-sdk")
=======
const aws=require("aws-sdk")
>>>>>>> 70377cfcd45456c7d00efafb0db1c0b727b2f22a


//all the apis
router.post("/register",usercontroller.createuser)
router.post('/login', usercontroller.login)

router.post("/books", middle.authenticate, middle.authorize, bookcontrolller.createBooks)
router.get("/books",  bookcontrolller.getbooks)
router.get("/books/:bookId",middle.authenticate, bookcontrolller.getbooksParams)
router.put("/books/:bookId",middle.authenticate,middle.authorize, bookcontrolller.updateBook)
router.delete("/books/:bookId",middle.authenticate, middle.authorize, bookcontrolller.deleteBookById)
 
router.post("/books/:bookId/review", review.createReview)
router.put("/books/:bookId/review/:reviewId", review.updatereview )
router.delete("/books/:bookId/review/:reviewId", review.deletereviewById)


<<<<<<< HEAD
=======
// s3 and cloud stodare
//  step1: multer will be used to get access to the file in nodejs( from previous session learnings)
//  step2:[BEST PRACTISE]:- always write s2 upload function separately- in a separate file/function..exptect it to take file as input and return the uploaded file as output
// step3: aws-sdk install - as package
// step4: Setupconfig for aws authenticcation- use code below as plugin keys that are given to you
//  step5: build the uploadFile funciton for uploading file- use code below and edit what is marked HERE only


//PROMISES:-
// -you can never use await on callback..if you awaited something , then you can be sure it is within a promise
// -how to write promise:- wrap your entire code inside: "return new Promise( function(resolve, reject) { "...and when error - return reject( err )..else when all ok and you have data, return resolve (data)

>>>>>>> 70377cfcd45456c7d00efafb0db1c0b727b2f22a
aws.config.update({
    accessKeyId: "AKIAY3L35MCRZNIRGT6N",
    secretAccessKey: "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",
    region: "ap-south-1"
<<<<<<< HEAD
=======


>>>>>>> 70377cfcd45456c7d00efafb0db1c0b727b2f22a
})

let uploadFile= async ( file) =>{
   return new Promise( function(resolve, reject) {
    // this function will upload file to aws and return the link
<<<<<<< HEAD
    let s3= new aws.S3({apiVersion: '2006-03-01'}); // we will be using the s3 service of aws 
=======
    let s3= new aws.S3({apiVersion: '2006-03-01'}); // we will be using the s3 service of aws
>>>>>>> 70377cfcd45456c7d00efafb0db1c0b727b2f22a

    var uploadParams= {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",  //HERE
        Key: "abc/" + file.originalname, //HERE 
        Body: file.buffer
    }


    s3.upload( uploadParams, function (err, data ){
        if(err) {
            return reject({"error": err})
        }
        console.log(data)
        console.log("file uploaded succesfully")
        return resolve(data.Location)
    })

    // let data= await s3.upload( uploadParams)
    // if( data) return data.Location
    // else return "there is an error"

   })
}

router.post("/write-file-aws", async function(req, res){

    try{
        let files= req.files
        if(files && files.length>0){
            //upload to s3 and get the uploaded link
            // res.send the link back to frontend/postman
            let uploadedFileURL= await uploadFile( files[0] )
            res.status(201).send({msg: "file uploaded succesfully", data: uploadedFileURL})
        }
        else{
            res.status(400).send({ msg: "No file found" })
        }
        
    }
    catch(err){
        res.status(500).send({msg: err})
    }
    
})

<<<<<<< HEAD


=======
>>>>>>> 70377cfcd45456c7d00efafb0db1c0b727b2f22a
module.exports=router