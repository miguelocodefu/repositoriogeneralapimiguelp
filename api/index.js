import express from "express";
import userRuta from "./ruta/users.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/",userRuta);
app.listen(8800);