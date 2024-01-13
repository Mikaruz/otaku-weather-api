import { Router } from "express";
import { getDraws, getDraw } from "../controllers/draws.controller.js";

const router = Router();

router.get("/draws", getDraws);
router.get("/draws/:id", getDraw);

export default router;
