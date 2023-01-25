import express from "express";
import cors from "cors";
import Routes from './routes/index.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(Routes);

app.listen(5000, ()=>console.log(`listening on Port 5000`));
