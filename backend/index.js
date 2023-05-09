import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/userRoutes.js";
import connectDatabase from "./config/database.js";

const app = express();
dotenv.config({ path: "backend/config/config.env" });

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = "8080";

connectDatabase(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
