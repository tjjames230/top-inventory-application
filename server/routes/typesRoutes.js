import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("all types page from router");
});

export default router;
