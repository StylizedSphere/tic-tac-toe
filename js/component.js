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
<div id="frame">
    <div id="sidepanel">
        <div id="profile">
            <div class="wrap">
                <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online" alt="" />
                <p>Mike Ross</p>
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
                    <!-- <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="mikeross" />
                    <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="ross81" />
                    <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="mike.ross" /> -->
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
                    <button id="sign-out">Sign out</button>
                </div>
            </div>
        </div>
        <div id="search">
            <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" placeholder="Search contacts..." />
        </div>
    
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
        <ul class="no-bullet" id="js-listCon"></ul>
        
        <!-- <div id="contacts">
            <ul>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status online"></span>
                        <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                        <div class="meta">
                            <p class="name">Louis Litt</p>
                            <p class="preview">You just got LITT up, Mike.</p>
                        </div>
                    </div>
                </li>
                <li class="contact active">
                    <div class="wrap">
                        <span class="contact-status busy"></span>
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <div class="meta">
                            <p class="name">Harvey Specter</p>
                            <p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status away"></span>
                        <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                        <div class="meta">
                            <p class="name">Rachel Zane</p>
                            <p class="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status online"></span>
                        <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                        <div class="meta">
                            <p class="name">Donna Paulsen</p>
                            <p class="preview">Mike, I know everything! I'm Donna..</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status busy"></span>
                        <img src="http://emilcarlsson.se/assets/jessicapearson.png" alt="" />
                        <div class="meta">
                            <p class="name">Jessica Pearson</p>
                            <p class="preview">Have you finished the draft on the Hinsenburg deal?</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status"></span>
                        <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
                        <div class="meta">
                            <p class="name">Harold Gunderson</p>
                            <p class="preview">Thanks Mike! :)</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status"></span>
                        <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
                        <div class="meta">
                            <p class="name">Daniel Hardman</p>
                            <p class="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status busy"></span>
                        <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt="" />
                        <div class="meta">
                            <p class="name">Katrina Bennett</p>
                            <p class="preview">I've sent you the files for the Garrett trial.</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status"></span>
                        <img src="http://emilcarlsson.se/assets/charlesforstman.png" alt="" />
                        <div class="meta">
                            <p class="name">Charles Forstman</p>
                            <p class="preview">Mike, this isn't over.</p>
                        </div>
                    </div>
                </li>
                <li class="contact">
                    <div class="wrap">
                        <span class="contact-status"></span>
                        <img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt="" />
                        <div class="meta">
                            <p class="name">Jonathan Sidwell</p>
                            <p class="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div> -->
        <div id="bottom-bar">
            <button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
            <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
        </div>
    </div>
    <div class="content">
        <div class="contact-profile">
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <!-- <p>Harvey Specter</p> -->
            <p id="js-conTitle">Conversation Name</p>
            <div class="social-media">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                 <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
        <div class="messages">
            <ul id="messages"></ul>
        </div>
        <div class="message-input" id="js-formChat">
            <div class="wrap">
            <input type="text" placeholder="Write your message..." id="message" />
            <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
            <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</div>
`