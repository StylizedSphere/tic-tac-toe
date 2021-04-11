import registerScreen from "./views/register.js"
import loginScreen from "./views/login.js"
import chatScreen from "./views/chat.js"

function setScreen(screen) {
    document.getElementById("app").innerHTML = screen.content
    screen.onload()
}
setScreen(chatScreen)

export default setScreen;