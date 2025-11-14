import jwt from 'jsonwebtoken';

export async function genAccToken(payload){
    console.log(payload)
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "15m"});
}

export async function verifyToken(token){
    return await jwt.verify(token, process.env.JWT_SECRET)
}