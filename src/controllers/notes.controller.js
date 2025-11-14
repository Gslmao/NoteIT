import { createNote, fetchNotes } from '../services/notes.service.js'
import { createUser, loginUser } from '../services/users.service.js'

class noteCtrl{
    async CreateNote(req, res) {
    try {
        const uID = req.user;
        const note = await createNote(uID, req.body);

        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({message: err.message});
    }

    }
    
    async FetchNotes(req, res){
        try{
            const uID = req.user['userId'];
            const notes = await fetchNotes(uID);
            res.status(201).json(notes);

        } catch (err) {
            res.status(500).json({message: err.message});
        }
        
    }
}

class userMan{
    async Signup(req, res){
        try{
            const note = await createUser(req.body);
            res.status(201).json(note);
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }

    async Login(req, res){
        try{
            console.log(req.body)
            const response = await loginUser(req.body)
            res.status(201).json({message: response})
        } catch (err) { 
            res.status(500).json({message: err.message})
        }
    }
}

export const noteController = new noteCtrl();
export const authController = new userMan();
