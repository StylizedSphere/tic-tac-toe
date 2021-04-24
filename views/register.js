import setScreen from "../index.js"
import loginScreen from "./login.js"
import {register} from "../controllers/auth.js"

const registerScreen = 
    `
    <div class="login-bg w-100 h-100">
        <div class="signupbox">
            <img src = "avt.png" class="avatar">
            <h1>Sign up</h1>
            <form id="js-formRegister"> <p><em>Gmail</em></p>
                <input type="text" id="email">
                <p><em>Username</em></p>
                <input type="text">
                <p><em>Password</em></p>
                <input type="password" id="password">
                <p><em>Retype Password</em></p>
                <input type="password" id="retypePassword">
                <button type="submit">Sign up</button>
                <button type="button" id="js-btnMoveToLogin">Back to login</button>

            </form>    
        </div>
    </div>
    `

function onload() {
    document.getElementById("js-btnMoveToLogin").addEventListener("click", function() {
        setScreen(loginScreen)
    })
    const form = document.getElementById("js-formRegister")
    form.addEventListener("submit", async function(event) {
        event.preventDefault()
        const userInput = {
            email: form.email.value,
            displayName: form.name.value,
            password: form.password.value,
            retypePassword: form.retypePassword.value,
        }
        try {
            const result = await register(userInput)
            if (result) alert("Register successfully! Check your inbox!")
        } catch(err) {
            alert(err.message)
        }
        
    })
}


export default {
    content: registerScreen,
    onload: onload
}