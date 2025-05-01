import express from "express";
import trainerController from "../controllers/trainerController.js";

const router = express.Router();

router.get("/", trainerController.getAllTrainers);

router.get("/:id", trainerController.getTrainer);

export default router;
