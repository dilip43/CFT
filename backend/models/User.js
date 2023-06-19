const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	fname: {
		type: String,
	},
	email: {
		type: String,
		requied: true,
	},
	phoneNumber: {
		type: Number,
		required: [true, "Please enter a valid number"],
		max: 10,
		required: true,
	},
	password: {
		type: String,
		required: [true, "Please enter a password"],
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
