const mongoose = require('mongoose');

var Candidat = mongoose.model('Candidat',{
    nom: {type: String},
    prenom: {type: String},
    email:{ type :String},
});
module.exports = {Candidat};
