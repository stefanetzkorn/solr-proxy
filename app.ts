import express, {Express} from "express";
import cors from "cors";
import fileSearchRoutes from "./routes/FileSearchRoutes";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/filesearch", fileSearchRoutes);

app.listen(3000, () => {
    console.log("running");
})