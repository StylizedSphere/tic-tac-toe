const component = {}

component.login = `
<div class="login-bg w-100 h-100"> 
    <div class="loginbox">
    <img src = "./img/avt.png" class="avatar">
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

component.register = `
    <div class="login-bg w-100 h-100">
        <div class="signupbox">
            <img src = "./img/avt.png" class="avatar">
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
    </div>
`

component.chat = `
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
        <div class="bg-primary p-xl" id="js-conTitle">Conversation Name
            <button id="signout">Sign out</button>
        </div>
        <div class="d-flex  flex-grow-1">
            <div class="d-flex flex-grow-3 column">
                <div class="d-flex flex-grow-1">
                    <div class="w-100 overflow" id="js-listMessage"></div>
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
                <form class="" id="js-formInvite">      
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