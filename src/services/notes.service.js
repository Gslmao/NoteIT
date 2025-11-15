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

export async function delNotes(noteId){
    try {
        const notes = await Note.deleteOne({ _id: noteId });
        return notes
    } catch (err) {
        throw new Error("Failed to delete the note: " + err.message);
    }
}

export async function editNote(noteId, updates){
    try {
        const notes = await Note.findByIdAndUpdate({ _id: noteId }, updates, { new: true, runValidators: true });
        return notes
    } catch (err) {
        throw new Error("Failed to edit the note: " + err.message);
    }
}
