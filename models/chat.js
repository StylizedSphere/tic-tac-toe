import { authedUser } from "./auth.js"
import chatScreen from "../views/chat.js"

let conversations = []
let messages = []
let activeCon = ""
let msgListener = function(){}

function subscribeListCon() {
    db.collection("conversations")
    .where("list_member", "array-contains", authedUser)
    .orderBy("sent_at")
    .onSnapshot(function(snapshot) {
        const cons = snapshot.docChanges()
        cons.forEach(function(con) {
            const id = con.doc.id
            if (con.type === "added") {
                conversations.push({
                    ...con.doc.data(),
                    id: id,    
                })
            } else if (con.type === "modified") {
                conversations = conversations.map(function(conversation) {
                    if (conversation.id === id) {
                        const updatedConversation = {
                            ...con.doc.data(),
                            id: id,  
                        }
                        if (conversation.id === activeCon) {
                            chatScreen.onActiveConUpdate(updatedConversation)
                        }
                        return updatedConversation
                    }
                    return conversation
                })
            }
            
        })
        notifyConversationsChanges()
    })
}

function changeActiveCon(nextConId) {
    if (nextConId !== activeCon) {
        activeCon = nextConId
        chatScreen.onActiveConChanges(
            conversations.find(function(con) {
                return con.id === nextConId
            })
        )
        messages = []
        notifyMessageChanges()
        msgListener()
        msgListener = db.collection("messages")
        .where("conversation_id", "==",activeCon)
        .orderBy("sent_at")
        .onSnapshot(function(snapshot) {
            const msgs = snapshot.docChanges()
            msgs.forEach(function(msg) {
                if(msg.type === "modified") return
                const id = msg.doc.id
                messages.push({
                    ...msg.doc.data(),
                    id: id, 
                })
            })   
            notifyMessageChanges(messages)
        }) 
        
    }
}

function invite(email) {
    if (!email) {
        throw new Error("Email cannot be empty!")
    }
    if (!activeCon) {
        throw new Error("You have to choose a conversation first!")
    }
    db.collection("conversations").doc(activeCon).update({
        list_member: firebase.firestore.FieldValue.arrayUnion(email)
    })
}

function notifyConversationsChanges() {
    chatScreen.onConsChanges(conversations)
}

function notifyMessageChanges() {
    chatScreen.onMessageChanges(messages)
}

export {subscribeListCon, changeActiveCon, invite, activeCon}