import { verifyToken } from '../utils/jwt.util.js'
import Note from '../models/note.model.js'

export async function authVerify(req, res, next){
    const authHead = req.headers['authorization']
    if (!authHead) {
        return res.status(401).json({ message: "Missing Authorization header" });
    }
    const token = authHead.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Missing token" });
    }

    try {
        const payload = await verifyToken(token);
        console.log(payload.sub)
        req.user = { userId: payload.sub };
        console.log(req.body)
        next();
        
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}
export async function isOwner(req, res, next) {
    try{
        const userId = req.user['userId'];
    const noteId = req.params.id;

    const resp = await Note.findById(noteId)
    if (!resp){
        return res.status(404).json({message: "Note Doesnt exist"})
    }

    if (resp.userId.toString() !== userId){
        return res.status(403).json({message: "Not the owner of this note"})
    }
    req.own = true;
    next();
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
    
}