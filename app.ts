import express, {Express} from "express";
import fileSearchRoutes from "./routes/FileSearchRoutes";

const app: Express = express();

app.use("/filesearch", fileSearchRoutes);

app.listen(3000, () => {
    console.log("running");
})