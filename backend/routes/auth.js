const express = require("express");
const router = expres.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//sign up
router.post("/api/signup", async (req, res) => {
	try {
		const { name, fname, email, phoneNumber, password } = req.body;

		//check if user already exist or not

		let user = await User.findOne({ email: email });
		if (user) {
			return res.status(400).json({ error: "User already exist" });
		}

		// create a new user
		user = new User({ name, fname, email, phoneNumber, password });

		user.password = await bcrypt.hash(password, 10);

		await user.save();

		res.json({ msg: "User Registered Successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Server Error");
	}
});

// login
router.post("/api/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		//check if user exist or not

		let user = await User.findOne({ email: email });
		if (user) {
			return res.status(400).json({ error: "Invalid Credentials" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid Credentials" });
		}

		// generate token
		const token = jwt.sign({ userId: user._id }, "secretKey");
		localStorage.setItem('token', token);

		res.json({ token });
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
