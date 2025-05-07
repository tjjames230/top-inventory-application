import express from "express";
import trainerController from "../controllers/trainerController.js";
import { validation, testNext } from "../middleware/validation.js";

const router = express.Router();

router.get("/", validation, testNext, trainerController.getAllTrainers);

router.get("/:id", trainerController.getTrainer);

export default router;
