const express = require('express');
const router = express.Router();
var  async = require('async');
const Student = require('../models/student');

//submits posts
router.patch('/:postId',async  (req,res) => {
    const mongodoc = await Student.find({"_id" : req.params.postId})
    const review = mongodoc[0]
    let array = Object.keys(req.body)
    const x = [] 
//     for (let i = 0; i < keysb.length; i++) {
//     if((keysb[i] in review.toJSON())===false){
//          x.push(keysb[i])
//     }
//    }



   async.eachSeries(array, function updateObject (obj, alldone) {
    console.log(obj)
    // Model.update(condition, doc, callback)
     Student.findOneAndUpdate({ "_id": req.params.postId }, { $set : { [obj]: req.body[obj] }}, alldone);
}, function allDone (err) {
});


const updated = await Student.findById(req.params.postId)
res.json({message: "success", data: updated})


//    for(let i = 0; i<keysb.length; i++){
//     let z = keysb[i] 
//     const updatedpost = await Student.findOneAndUpdate({"_id": req.params.postId},{$set: {keysb[i] : req.body[z]}},{returnNewDocument: true,new: true,strict: false})
//     res.json(updatedpost)
//    }
//    for(let i = 0; i<x.length; i++){
//     let z = x[i] 
//     const updatedpost = await Student.findOneAndUpdate({"_id": req.params.postId},{$set: {[z] : req.body[z]}},{returnNewDocument: true,new: true,strict: false})
//     res.json(updatedpost)
//    }
   
});


module.exports = router