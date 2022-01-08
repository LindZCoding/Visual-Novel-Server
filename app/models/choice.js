const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const commentSchema = require('./comment')

const choiceSchema = new Schema({
    userId: {
        //tell mongoose it's looking for a user id
        type: Schema.Types.ObjectId,
        //refer to that schema
        ref: 'User'
    },
    choiceLine: {
        type: String
    }
})

module.exports = mongoose.model('Choice', choiceSchema)