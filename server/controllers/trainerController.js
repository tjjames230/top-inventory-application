// get all trainers
const getAllTrainers = (req, res) => {
	res.send("all trainers from controller");
};

// get single trainer
const getTrainer = (req, res) => {
	const id = req.params.id;

	res.send(id);
};

// create new trainer

// edit trainer

// delete trainer

export default { getAllTrainers, getTrainer };
