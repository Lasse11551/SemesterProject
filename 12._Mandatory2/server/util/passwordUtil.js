import bcrypt from "bcrypt";
import db from "../database/connection.js";

const saltRounds = 14;

// /signup /forhotpassword
export async function signup(password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// /login
export async function login(user, password) {

    const isSame = await bcrypt.compare(password, user.password)

    if (!isSame) {
        throw new Error("Incorrect email or password")
    }
}

