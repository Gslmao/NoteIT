import User from '../models/users.model.js';
import { hashPaswd, compare } from '../utils/hash.util.js';
import { genAccToken } from '../utils/jwt.util.js';

export  async function createUser(data){ 
    const pass = data.passwd;
    data.passwd = await hashPaswd(pass);  
    const newUser = User.create(data);
    
    return newUser
}

export async function loginUser(data){
    try{
        const exists = await User.exists({ userName: data.userName });
        if (!!exists) {
            const docs = await User.findOne({ userName: data.userName });
            const auth = await compare(data.passwd, docs.passwd);
            if (auth) {
                return genAccToken({sub: docs._id, userName: docs.userName})
            } else {
                return "Authentication Error"
            }
        } else {
            return "User doesnt exit" 
        }
    } catch (err) {
        return err.message
    }
}
