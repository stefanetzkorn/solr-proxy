import express, {Router} from "express";
import {searchForFile} from "../controller/FileSearchController";

const router: Router = express.Router();

router.get("/", searchForFile);

export default router;