import express from "express";
import { db, auth } from "./config.js";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;