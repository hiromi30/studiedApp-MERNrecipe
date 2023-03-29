import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config"


import {userRouter} from "./routes/users.js"
import {recipeRouter} from "./routes/recipes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)
app.use("/recipes", recipeRouter)


mongoose.connect(process.env.MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("server started"));
