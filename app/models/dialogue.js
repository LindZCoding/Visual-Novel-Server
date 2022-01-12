const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Choice = require('./choice')


const dialogueSchema = new Schema({
    choiceId: {
        //tell mongoose it's looking for a choice id
        type: Schema.Types.ObjectId,
        //refer to that schema
        ref: 'Choice'
    },
    dialogueLine: {
        type: Array
    },
    choices: [Choice.choiceSchema]
})

module.exports = {
    dialogueModel: mongoose.model('Dialogue', dialogueSchema),
    dialogueSchema: dialogueSchema
}