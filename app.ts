import express, {Express} from "express";
import cors from "cors";
import fileRoutes from "./routes/FileRoutes";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/filesearch", fileRoutes);

app.listen(3000, () => {
    console.log("running");
})