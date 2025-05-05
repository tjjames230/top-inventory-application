import express from "express";
import trainerRouter from "./routes/trainerRoutes.js";
import pokemonRouter from "./routes/pokemonRoutes.js";
import typesRouter from "./routes/typesRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("home page");
});

app.use("/api/trainers", trainerRouter);

app.use("/api/pokemon", pokemonRouter);

app.use("/api/types", typesRouter);

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
