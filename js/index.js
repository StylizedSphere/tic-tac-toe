window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (user.emailVerified) {
                model.updateAuthedUser(user.email)
                view.setActiveScreen('chat')
           } else {
                alert('Please verify your email')
                firebase.auth().signOut() 
                view.setActiveScreen('login')
            }
        } else {
            view.setActiveScreen('login')
        }
    })
}