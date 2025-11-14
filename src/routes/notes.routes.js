import express from "express";
import { noteController } from "../controllers/notes.controller.js"
import { authVerify } from '../middleware/auth.js'
const noteRouter = express.Router();

noteRouter.post('/', authVerify, noteController.CreateNote);
noteRouter.get('/fetch', authVerify, noteController.FetchNotes);

export default noteRouter