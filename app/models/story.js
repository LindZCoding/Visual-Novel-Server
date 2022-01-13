const mongoose = require('mongoose')
const Schema = mongoose.Schema


const storySchema = new Schema({
    title: String,
    dialogues: Array
})

module.exports = mongoose.model('Story', storySchema)