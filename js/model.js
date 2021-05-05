const model = {}
let authedUser = ""
let img = "https://robohash.org/"

let conversations = []
let messages = []
let activeCon = ""
let activeMember = ""
let msgListener = function(){}

model.init = () => {
    conversations = []
    messages = []
    activeCon = ""
    activeMember = ""
} 

model.updateAuthedUser = (user) => {
    authedUser = user
}

model.subscribeListCon = () => {
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
                            view.onActiveConUpdate(updatedConversation)
                        }
                        return updatedConversation
                    }
                    return conversation
                })
            }
            
        })
        model.notifyConversationsChanges()
    })
}

model.changeActiveMember = (nextMember) => {
    if (nextMember !== activeMember) {
        activeMember = nextMember
        view.onActiveMemberChanges(nextMember)
    }
}

model.changeActiveCon = (nextConId) => {
    if (nextConId !== activeCon) {
        activeCon = nextConId
        view.onActiveConChanges(
            conversations.find(function(con) {
                return con.id === nextConId
            })
        )
        messages = []
        model.notifyMessageChanges()
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
            model.notifyMessageChanges(messages)
        }) 
        
    }
}

model.invite = (email) => {
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

model.notifyConversationsChanges = () => {
    view.onConsChanges(conversations)
}

model.notifyMessageChanges = () => {
    view.onMessageChanges(messages)
}