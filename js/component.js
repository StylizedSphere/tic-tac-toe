const component = {}

component.login = `
<div class="container loginbox">
    <img src="../css/avt.png" class="avatar">
    <h1>Sign in</h1>
    <form id="js-formLogin"> 
        <p><em>Username</em></p>
        <input type="text" placeholder="Enter Username" id="email">
        <p><em>Password</em></p>
        <input type="password"  placeholder="Enter Password" id="password">
        <input type="submit"  value="Login">
        <a id="js-btnMoveToRegister" href="">
            <div class="center"> Create an account </div>
        </a>
    </form>
</div>
`

component.register = `
<div class="container signupbox">
    <img src="../css/avt.png" class="avatar">
    <h1>Sign up</h1>
    <form id="js-formRegister"> <p><em>Gmail</em></p>
        <input type="text" id="email">
        <p><em>Username</em></p>
        <input type="text">
        <p><em>Password</em></p>
        <input type="password" id="password">
        <p><em>Retype Password</em></p>
        <input type="password" id="retypePassword">
        <button type="submit">Sign up</button>
        <button type="button" id="js-btnMoveToLogin">Back to login</button>
    </form>    
</div>
`

component.chat = `
<div id="frame">
    <div id="sidepanel">
        <div id="profile">
            <div class="wrap">
                <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online" alt="" />
                <p>Bill Gates v2</p>
                <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                <div id="status-options">
                    <ul>
                        <li id="status-online" class="active"><span class="status-circle"></span> <p>Online</p></li>
                        <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
                        <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
                        <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
                    </ul>
                </div>
                <div id="expanded">
                    <form class="" id="js-formInvite">      
                        <div class="d-flex"> 
                            <div class="d-flex flex-grow-1">
                                <input class="w-100" type="text" id="email">
                            </div>                
                            <div>
                                <button class="btn">Add</button>
                            </div>
                        </div>
                    </form>
                   <ul class="no-bullet hack2" id="js-listMember"></ul>
                </div>
            </div>
        </div>
        <div id="search">
            <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" placeholder="Search contacts..." />
        </div>
        <form id="js-formCreateCon">
            <div class="input d-flex">
                <div class="d-flex flex-grow-1">
                    <input class="w-100" type="text" id="txtConName" placeholder="Enter conversation name..." class="w-100">
                </div>
                <div class="">
                    <button class="btn" type="submit">Create</button>
                </div>
            </div>
        </form>
        <div class="hack"> 
            <ul class="no-bullet" id="js-listCon"></ul>
        </div>

        <div id="bottom-bar">
            <button id="sign-out"><i class="fa fa-sign-out fa-fw" aria-hidden="true"></i> <span>Sign out</span></button>
            <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
        </div>
    </div>
    <div class="content">
        <div class="contact-profile">
            <img src="../css/avt.png" alt="" >
            <p id="js-conTitle">Conversation Name</p>
            <div class="social-media">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                 <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
        <div class="messages" id="messagesForm">
            <ul id="messages"></ul>
        </div>
        <form class="message-input" id="js-formChat">
            <div class="wrap">
                <input type="text" id="message">
                <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                <button class=""><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </form>
    </div>
</div>
`