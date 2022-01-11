const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const commentSchema = require('./comment')

const characterSchema = new Schema({
    dialogueId: {
        //tell mongoose it's looking for a dialogue id
        type: Schema.Types.ObjectId,
        //refer to that schema
        ref: 'Dialogue'
    },
    name: {
        type: String,
    },
    dialogueLines: {
        type: String,
    },
    model: {
        type: String,
    }
})

module.exports = mongoose.model('Character', characterSchema)