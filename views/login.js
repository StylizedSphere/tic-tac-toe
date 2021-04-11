import setScreen from "../index.js"
import {login} from "../controllers/auth.js"
import chatScreen from "./chat.js"
import registerScreen from "./register.js"

const loginScreen = 
    `<form id="js-formLogin">
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" required>    
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" required>           
    </div>
    <div>
        <button type="submit">Login</button>
        <button type="button" id="js-btnMoveToRegister">Move to register</button>
    </div>
    </form>`

function onload() {
    document.getElementById("js-btnMoveToRegister").addEventListener("click", function() {
        setScreen(registerScreen)
    })
    const formLogin = document.getElementById("js-formLogin")
    formLogin.addEventListener("submit", async function(event) {
        event.preventDefault()
        const email = formLogin.email.value
        const password = formLogin.password.value
        const payload = {email: email, password: password}
        try {
            const success = await login(payload)
            if (success) {
                setScreen(chatScreen)
            }
        } catch(err) {
            alert(err.message)
        }
    })
}

export default {
    content: loginScreen,
    onload: onload
}