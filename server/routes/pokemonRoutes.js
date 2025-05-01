import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("all pokemon page from router");
});

export default router;
