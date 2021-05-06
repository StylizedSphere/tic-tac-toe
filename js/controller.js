const controller = {}

controller.createCon = (name) => {
    db.collection("conversations").doc().set({
        name: name,
        list_member: [authedUser],
        sent_at: firebase.firestore.FieldValue.serverTimestamp()
    })
}

controller.updateActiveCon = (nextConId) => {
    model.changeActiveCon(nextConId)
}

controller.updateActiveMember = (nextMember) => {
    model.changeActiveMember(nextMember)
}

controller.sendMsg = (msg) => {
    if (msg.length === 0) {
        throw new Error("Message cannot be empty!")
    }
    if (!activeCon) {
        throw new Error("You need to choose a conversation first!")
    }
    db.collection("messages").doc().set({
        content: msg,
        sender: authedUser,
        conversation_id: activeCon,
        sent_at: firebase.firestore.FieldValue.serverTimestamp()
    })
}

controller.register = async(payload) => {
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

controller.login = async(payload) => {
    if (payload.email.length === 0 || payload.password.length === 0) {
        throw new Error(`Email or password can't be empty`)
    }
    const loginResult = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    if (!loginResult.user.emailVerified) {
        throw new Error("User is not verified!")
    }
    model.init()
    model.updateAuthedUser(loginResult.user.email)
    return true;
}