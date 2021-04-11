import setScreen from "../index.js"
import loginScreen from "./login.js"
import {register} from "../controllers/auth.js"

const registerScreen = 
    `<form id="js-formRegister">
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" required>    
    </div>
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" required>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" required>           
    </div>
    <div>
        <label for="retypePassword">Retype Password</label>
        <input type="password" id="retypePassword" required>    
        <button type="submit">Register</button>
        <button type="button" id="js-btnMoveToLogin">Back to login</button>
    </div>
    </form>`

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