//modelo de datos o esquema

const mongoose = require('mongoose');

//
const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    
    description: {
        type: String,
    },
    isShared: {
        type: Boolean,
    },
    image: {
        type: String,
    },
    isLike: {
        type: Boolean,
    },
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Note', noteSchema);