import Note from '../models/note.model.js';

export async function createNote(userID, data){  
    
    const fields = { ...userID, ...data};
    const newNote = Note.create(fields);
    
    return newNote
}

export async function fetchNotes(userID){
    try {
        const notes = await Note.find({ userId: userID });
        return notes;
    } catch (err) {
        throw new Error("Failed to fetch notes: " + err.message);
    }
}

