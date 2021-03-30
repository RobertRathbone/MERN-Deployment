const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    url: {
        type: String,
        required: [true, "You need a picture"],
    },
    chests: {
        type: Number,
        required: [true, "Must declare chests"],
    },
    phrase: {
        type: String,
        required: [true, "Thy pithy wit must be on display"],
    },
    position: {
        type: String,
        required: [true, "Even recruits have jobs"],
    },
    leg: {
        type: Boolean,
        required: [true, "What are you doing on a Tuesday morning?"],
    },
    patch: {
        type: Boolean,
        required: [true, "What are you doing on a Tuesday morning?"],
    },
    hand: {
        type: Boolean,
        required: [true, "What are you doing on a Tuesday morning?"],
    }
})

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);