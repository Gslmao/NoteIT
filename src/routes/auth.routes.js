import express from "express";
import { authController } from "../controllers/notes.controller.js"
const authRouter = express.Router();

authRouter.post('/signup', authController.Signup);
authRouter.post('/login', authController.Login)

export default authRouter