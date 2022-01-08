const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const commentSchema = require('./comment')

const dialogueSchema = new Schema({
    choiceId: {
        //tell mongoose it's looking for a choice id
        type: Schema.Types.ObjectId,
        //refer to that schema
        ref: 'Choice'
    },
    dialogueLine: {
        type: String
    }
})

module.exports = mongoose.model('Dialogue', dialogueSchema)