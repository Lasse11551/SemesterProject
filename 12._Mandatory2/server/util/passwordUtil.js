import bcrypt from "bcrypt";

const saltRounds = 14;
const plainTextPassword = "Lasse"
const passwordHash = "$2b$14$bWBbZfNjqgcco0cIJDQKCeIbl6xjUc4RBtSkmefOs5s1DJYqVf96u";

// /signup /forhotpassword
async function signup(email, password) {
    const hashedPassword = await bcrypt.hash("hej", saltRounds);
    console.log(hashedPassword)
}

// /login
async function login(email, password) {
    let logins = [
        { email: "Lasse" , password: '$2b$14$q7ktmmj2/.U9Krgt/xk2LuAGOrToxZFgUE86d4bvzoHULBXkErmcO' },
        { email: "Karl" , password: '$2b$14$q7ktmmj2/.U9Krgt/xk2LuAGOrToxZFgUE86d4bvzoHULBXkErmcO' },
        { email: "Emil" , password: '$2b$14$q7ktmmj2/.U9Krgt/xk2LuAGOrToxZFgUE86d4bvzoHULBXkErmcO' },
    ];

    // Find the object with the provided email
    const user = logins.find(login => login.email === email);

    if (!user) {
        // If user not found, handle it accordingly (e.g., return an error)
        return "User not found";
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const isSame = await bcrypt.compare(hashedPassword, user.password)

    if (isSame) {
        // Passwords match, user is authenticated
        console.log("Authentication successful")
        return "Authentication successful";
    } else {
        // Passwords don't match, authentication failed
        console.log("Incorrect password")
        return "Incorrect password";
    }
}
