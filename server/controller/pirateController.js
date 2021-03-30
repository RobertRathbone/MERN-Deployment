const { response } = require('express');
const { Pirate } = require('../models/pirateModel');

module.exports.createPirate = (request, response) => {
    // const {name} = request.body;
    console.log("executed method create Pirate")
    Pirate.create(request.body)
        .then(Pirate=>response.json(Pirate))
        .catch(err=>response.status(405).json(err))
}

module.exports.findPirates = (request, response) => {
    Pirate.find().sort({name:1})
        .then(pirates => response.json(pirates))
        .catch(err => response.status(400).json(err));
}

module.exports.findPirate = (request, response) => {
    Pirate.findOne({_id: request.params.id})
    .then(foundPirate => response.json(foundPirate))
    .catch(err => response.status(400).json(err));
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators:true})
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(404).json(err));
}

module.exports.deletePirate = (request, response) => {
    Pirate.findOneAndDelete({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json("No delete-o", err));
}