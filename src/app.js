import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path';

import noteRouter from './routes/notes.routes.js'
import authRouter from './routes/auth.routes.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: path.resolve('.env') });

app.use('/api/notes', noteRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('NotesApp backend is working');
});

export default app