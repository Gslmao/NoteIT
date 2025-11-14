import { verifyToken } from '../utils/jwt.util.js'

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