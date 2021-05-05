const view = {}

view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = component[screenName]
    
    switch(screenName) {
        case 'login':
            const btnMoveToRegister = document.getElementById("js-btnMoveToRegister")
            btnMoveToRegister.addEventListener("click", function(event) {
                event.preventDefault()
                view.setActiveScreen('register')
            })
            const formLogin = document.getElementById("js-formLogin")
            formLogin.addEventListener("submit", async function(event) {
                event.preventDefault()
                const email = formLogin.email.value
                const password = formLogin.password.value
                const payload = {email: email, password: password}
                try {
                    const success = await controller.login(payload)
                    if (success) {
                        view.setActiveScreen('chat')
                    }
                } catch(err) {
                    alert(err.message)
                }
            })
            break;

        case 'register':
            document.getElementById("js-btnMoveToLogin").addEventListener("click", function() {
                view.setActiveScreen('login')
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
                    const result = await controller.register(userInput)
                    if (result) alert("Register successfully! Check your inbox!")
                } catch(err) {
                    alert(err.message)
                }
                
            })
            break;

        case 'chat':
            view.chat()
            model.subscribeListCon()
            const formCreateCon = document.getElementById("js-formCreateCon")
            formCreateCon.addEventListener("submit", function(event) {
                event.preventDefault()
                controller.createCon(formCreateCon.txtConName.value)
            })

            const formChat = document.getElementById("js-formChat")
            formChat.addEventListener("submit", function(event) {
                event.preventDefault()
                try {
                    controller.sendMsg(formChat.message.value)
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
                    model.invite(email)
                }catch(err) {
                    alert(err)
                }
            })

            document.getElementById("sign-out").addEventListener("click", () => {
                model.init()
                view.setActiveScreen('login')
            })
            break;
    }
}

view.chat = () => {
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");

        $("#profile-img").click(function() {
            $("#status-options").toggleClass("active");
        });
    
        $(".expand-button").click(function() {
        $("#profile").toggleClass("expanded");
            $("#contacts").toggleClass("expanded");
        });
    
        $("#status-options ul li").click(function() {
            $("#profile-img").removeClass();
            $("#status-online").removeClass("active");
            $("#status-away").removeClass("active");
            $("#status-busy").removeClass("active");
            $("#status-offline").removeClass("active");
            $(this).addClass("active");
            
            if($("#status-online").hasClass("active")) {
                $("#profile-img").addClass("online");
            } else if ($("#status-away").hasClass("active")) {
                $("#profile-img").addClass("away");
            } else if ($("#status-busy").hasClass("active")) {
                $("#profile-img").addClass("busy");
            } else if ($("#status-offline").hasClass("active")) {
                $("#profile-img").addClass("offline");
            } else {
                $("#profile-img").removeClass();
            };
            
            $("#status-options").removeClass("active");
        });
    
        function newMessage() {
            message = $(".message-input input").val();
            if($.trim(message) == '') {
                return false;
            }
            $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
            $('.message-input input').val(null);
            $('.contact.active .preview').html('<span>You: </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        };
    
        $('.submit').click(function() {
        newMessage();
        });
    
        $(window).on('keydown', function(e) {
        if (e.which == 13) {
            newMessage();
            return false;
        }
        });
}

view.onMessageChanges = (messages) => {
    const listMessage = document.getElementById("messages")
    listMessage.innerHTML = ""
    listMessage.style.maxHeight = listMessage.clientHeight

    messages.forEach(function(msg) {
        const msgClass = msg.sender === authedUser ? "sent" : "replies"
        const src = msg.sender === authedUser ? "http://emilcarlsson.se/assets/mikeross.png" : "http://emilcarlsson.se/assets/harveyspecter.png"
        const msgHtml = `
        <li class="${msgClass}">
            <img src="${src}" alt="" />
            <p>${msg.content}</p>
        </li>
        `
        listMessage.insertAdjacentHTML("beforeend", msgHtml)
    })
    listMessage.scrollTop = listMessage.scrollHeight
}

view.onConsChanges = (cons) => {
    const listCon = document.getElementById("js-listCon")
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
            controller.updateActiveCon(con.id)
        })
        listCon.appendChild(conLi)
    })
}

view.onActiveConChanges = (con) => {
    const listCon = document.querySelectorAll("#js-listCon > li")
    listCon.forEach(function(conLi) {
        if (conLi.dataset.id !== con.id) {
            conLi.classList.remove("active")
        } else {
            conLi.classList.add("active")
        }
    })
    document.getElementById("js-conTitle").innerHTML = con.name
    view.onActiveConUpdate(con)
}

view.onActiveMemberChanges = (email) => {
    const listMember = document.querySelectorAll("#js-listMember > li")
    listMember.forEach(function(conLi) {
        if (conLi.dataset.id !== email) {
            conLi.classList.remove("active")
        } else {
            conLi.classList.add("active")
        }
    })
}

view.updateListMember = (emails) => {
    const listMember = document.getElementById("js-listMember")
    listMember.innerHTML = ""
    emails.forEach(function(email) {
        const memberLi = document.createElement("li")
        memberLi.innerText = email
        memberLi.dataset.id = email
        memberLi.addEventListener("click", function() {
            controller.updateActiveMember(email)
        })
        listMember.appendChild(memberLi)
    })
}

view.onActiveConUpdate = (con) => {
    const email = con.list_member
    view.updateListMember(email)
}