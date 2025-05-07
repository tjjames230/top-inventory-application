import trainers from "../db_trainers.js";

// get all trainers
const getAllTrainers = (req, res) => {
	res.send("all trainers from controller");
};

// get single trainer
const getTrainer = (req, res) => {
	const id = Number(req.params.id);
	const trainer = trainers.find((trainer) => trainer.id === id);

	if (!trainer) {
		res.status(404);
		res.send("no trainer with that id");
	}

	res.send(trainer.name);
};

// create new trainer

// edit trainer

// delete trainer

export default { getAllTrainers, getTrainer };
