import express, {Router} from "express";
import {searchForFile, updateFile} from "../controller/FileController";

const router: Router = express.Router();

router.get("/search", searchForFile);
router.post("/update", updateFile);

export default router;