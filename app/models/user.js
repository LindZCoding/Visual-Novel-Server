const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Choice = require('./choice')
const Dialogue = require('./dialogue')

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		hashedPassword: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		// weight: Dialogue.dialogueSchema,
		choices: [Choice.choiceSchema],
		token: String,
	},
	{
		timestamps: true,
		toObject: {
			// remove `hashedPassword` field when we call `.toObject`
			transform: (_doc, user) => {
				delete user.hashedPassword
				return user
			},
		},
	}
)

module.exports = mongoose.model('User', userSchema)
