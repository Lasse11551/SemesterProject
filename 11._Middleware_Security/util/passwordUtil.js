import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "Hunter123";
const passwordHashed = "$2b$14$0.SNvpRLOlu/vYGojwUGwu2uHAErXzAgtglD40w/d0Ry7MHrv5vKG"

// /signup /forgotpassword
const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hashedPassword)

const isSame = await bcrypt.compare(plaintextPassword, passwordHashed);

console.log(isSame)