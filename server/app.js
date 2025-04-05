import express from "express";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("success");
});

app.get("/trainers", (req, res) => {
	res.send("all trainers page");
});

app.get("/pokemon", (req, res) => {
	res.send("all pokemon page");
});

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
