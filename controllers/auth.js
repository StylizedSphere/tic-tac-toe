import { updateAuthedUser } from "../models/auth.js"

async function register(payload) {
    for (let key in payload) {
        if (payload[key].length === 0) {
            throw new Error(`${key} cannot be empty`)
        }
        if (payload.password !== payload.retypePassword) {
            throw new Error(`password doesn't match`)
        }
        await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        firebase.auth().currentUser.sendEmailVerification()
        return true
    }
}

async function login(payload) {
    if (payload.email.length === 0 || payload.password.length === 0) {
        throw new Error(`Email or password can't be empty`)
    }
    const loginResult = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    if (!loginResult.user.emailVerified) {
        throw new Error("User is not verified!")
    }
    updateAuthedUser(loginResult.user.email)
    return true;
}
export {register, login}