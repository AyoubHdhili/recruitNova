const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const {Candidat} = require('../models/candidat');


//create
router.post('/',async (req, res)  =>{
    const  { candidat } = req.body
    console.log(candidat )
    var newCandidat = new Candidat({
        nom : candidat.nom,
        prenom : candidat.prenom,
        email : candidat.email,
    });
await newCandidat.save();
return res.status(204).json(newCandidat);

});

//read
router.get('/',async (req,res) =>{
   await Candidat.find()
    .then(docs =>{
        res.send(docs);
    })
    .catch(err => {
      console.log('Error in Retrieving Employees: ' + JSON.stringify(err, undefined, 2));
    });
});

//update
router.put('/:id',async (req, res) =>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Record With Given Id ' + req.params.id);
    }
    const  { candidat } = req.body
   await Candidat.findByIdAndUpdate(req.params.id,
        {
            nom : candidat.nom,
            prenom : candidat.prenom,
            email : candidat.email,
        });

});

router.get('/:id', (req, res) =>{
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record with given id : ' + req.params.id);
    }
    Candidat.findById(req.params.id, (err, doc) =>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error in retrieving Candidat: " + JSON.stringify(err, undefined, 2));
        }
    });
});

//delete
router.delete('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('Invalid Employee with ID:' + req.params.id);
    }
    console.log(req.params.id );
    await Candidat.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
module.exports = router;