import setScreen from "../index.js"
import {login} from "../controllers/auth.js"
import chatScreen from "./chat.js"
import registerScreen from "./register.js"

const loginScreen = 
    `
    <div class="login-bg w-100 h-100"> 
        <div class="loginbox">
        <img src = "avt.png" class="avatar">
            <h1>Login</h1>
            <form id="js-formLogin"> 
                <p><em>Username</em></p>
                <input type="text" placeholder="Enter Username" id="email">
                <p><em>Password</em></p>
                <input type="password"  placeholder="Enter Password" id="password">
                <input type="submit"  value="Done">
                <a id="js-btnMoveToRegister" href="">Don't have an account?</a>
            </form>
        </div>
    </div>
    `

function onload() {
    const btnMoveToRegister = document.getElementById("js-btnMoveToRegister")
    btnMoveToRegister.addEventListener("click", function(event) {
        event.preventDefault()
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