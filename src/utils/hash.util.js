import bcrypt from 'bcrypt';

export async function hashPaswd(pwd){
    return await bcrypt.hash(pwd, 5);
}

export async function compare(password, hashed) {
    return await bcrypt.compare(password, hashed);
}
