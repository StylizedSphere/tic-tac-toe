let authedUser = ""
let img = "https://robohash.org/"
function updateAuthedUser(user) {
    authedUser = user
    img = img.concat((Math.random() * 100).toString())
}
export {authedUser, updateAuthedUser, img}