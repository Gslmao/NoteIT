import express from "express";
import { noteController } from "../controllers/notes.controller.js"
import { authVerify, isOwner } from '../middleware/auth.js'
const noteRouter = express.Router();

noteRouter.post('/', authVerify, noteController.CreateNote);
noteRouter.get('/fetch', authVerify, noteController.FetchNotes);
noteRouter.delete('/:id', authVerify, isOwner, noteController.DeleteNote);
noteRouter.put('/:id', authVerify, isOwner, noteController.FetchNotes);

export default noteRouter