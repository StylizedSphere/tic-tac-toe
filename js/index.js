window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // model.currentUser = {
            //   displayName: user.displayName,
            //   email: user.email
            // }
            if (user.emailVerified) {
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