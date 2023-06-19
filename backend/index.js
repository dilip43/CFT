const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth = require("./routes/auth");
//middleware
app.use("/api", auth);
app.use(express.json());

mongoose
	.connect("mongodb://localhost/task_manager", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("database connected");
	})
	.catch((e) => {
		console.log(e.message);
	});

app.listen(8080, () => {
	console.log("server started");
});
