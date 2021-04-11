import {createCon, updateActiveCon, sendMsg} from "../controllers/chat.js"
import { subscribeListCon, invite, activeCon} from "../models/chat.js"
import {authedUser} from "../models/auth.js"

const chatScreen = `
<div class="d-flex h-100">
    <div class="flex-grow-1 card shadow">
        <form id="js-formCreateCon">
            <div class="d-flex">
                <div class="flex-grow-1">
                    <input class="form-group w-100" type="text" id="txtConName" placeholder="Enter conversation name..." class="w-100">
                </div>
                <div class="">
                    <button class="form-group" type="submit">Create</button>
                </div>
            </div>
        </form>
        <ul class="no-bullet" id="js-listCon"></ul>
    </div>
    <div class="d-flex flex-grow-5 column">
        <div class="bg-primary p-xl" id="js-conTitle">Conversation Name</div>
        <div class="d-flex  flex-grow-1">
            <div class="d-flex  flex-grow-3 column">
                <div class="d-flex  flex-grow-1">
                    <div class="w-100" id="js-listMessage"></div>
                </div>    
                <form class="form-inline" style="margin: 0" id="js-formChat">      
                    <div class="form-group flex-grow-1">
                        <input class="w-100" type="text" id="message">
                    </div>                
                    <div class="form-group">
                        <button class="">Send</button>
                    </div>
                </form>
            </div>
            <div class="flex-grow-1 card shadow">
                <form class="" style="margin" id="js-formInvite">      
                    <div class="d-flex"> 
                        <div class="d-flex  flex-grow-1">
                            <input class="w-100" type="text" id="email">
                        </div>                
                        <div class="">
                            <button>Add</button>
                        </div>
                    </div>
                </form>
                <ul class="no-bullet" id="js-listMember"></ul>
            </div>
        </div>
    </div>
</div>

`
function onload() { 
    subscribeListCon()
    const formCreateCon = document.getElementById("js-formCreateCon")
    formCreateCon.addEventListener("submit", function(event) {
        event.preventDefault()
        createCon(formCreateCon.txtConName.value)
    })

    const formChat = document.getElementById("js-formChat")
    formChat.addEventListener("submit", function(event) {
        event.preventDefault()
        try {
            sendMsg(formChat.message.value)
            formChat.message.value = ""
        }catch(err) {
            alert(err)
        }
    })

    const formInvite = document.getElementById("js-formInvite")
    formInvite.addEventListener("submit", function(event) {
        event.preventDefault()
        const email = formInvite.email.value
        try {
            invite(email)
        }catch(err) {
            alert(err)
        }
    })
}

function onMessageChanges(messages) {
    const listMessage = document.getElementById("js-listMessage")
    listMessage.innerHTML = ""
    messages.forEach(function(msg) {
        const align = msg.sender === authedUser ? "flex-end" : "flex-start"
        const color = msg.sender === authedUser ? "msg-primary" : "msg-secondary"
        const msgHtml = `<div class="d-flex ${align}">
        <span class="msg ${color}">${msg.content}</span>
        </div>`
        listMessage.insertAdjacentHTML("beforeend", msgHtml)
    })
}

function onConsChanges(cons) {
    const listCon = document.getElementById("js-listCon")
    const conTitle = document.getElementById("js-conTitle")
    listCon.innerHTML = ""
    cons.forEach(function(con) {
        const conLi = document.createElement("li")
        conLi.innerHTML = con.name
        conLi.dataset.id = con.id
        conLi.classList.add("list-item")

        if (conLi.dataset.id === activeCon) {
            conLi.classList.add("active")
            
        }
        conLi.addEventListener("click", function() {
            updateActiveCon(con.id)
        })
        listCon.appendChild(conLi)
    })
    
}

function onActiveConChanges(con) {
    const listCon = document.querySelectorAll("#js-listCon > li")
    listCon.forEach(function(conLi) {
        if (conLi.dataset.id !== con.id) {
            conLi.classList.remove("active")
        } else {
            conLi.classList.add("active")
        }
    })
    document.getElementById("js-conTitle").innerHTML = con.name
    onActiveConUpdate(con)
}

function updateListMember(emails) {
    const listMember = document.getElementById("js-listMember")
    listMember.innerHTML = ""
    emails.forEach(function(email) {
        const memberLi = document.createElement("li")
        memberLi.innerText = email
        listMember.appendChild(memberLi)
    })
}

function onActiveConUpdate(con) {
    const email = con.list_member
    updateListMember(email)
}

export default {
    content: chatScreen,
    onload: onload,
    onConsChanges: onConsChanges,
    onMessageChanges: onMessageChanges,
    onActiveConChanges: onActiveConChanges,
    onActiveConUpdate: onActiveConUpdate,
}