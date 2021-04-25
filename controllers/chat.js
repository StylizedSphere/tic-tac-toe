import {authedUser, img} from "../models/auth.js"
import { changeActiveCon, changeActiveMember, activeCon } from "../models/chat.js"
function createCon(name){
    db.collection("conversations").doc().set({
        name: name,
        list_member: [authedUser],
        sent_at: firebase.firestore.FieldValue.serverTimestamp()
    })
}

function updateActiveCon(nextConId) {
    changeActiveCon(nextConId)
}

function updateActiveMember(nextMember) {
    changeActiveMember(nextMember)
}

function sendMsg(msg) {
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

export {createCon, updateActiveCon, updateActiveMember, sendMsg}