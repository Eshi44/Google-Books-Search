//require dotenv
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes= require ("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
		currentPort: PORT,
	});
});

// routes
app.use(routes)

app.use(express.static("client/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
	useNewUrlParser: true,
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`);
});
