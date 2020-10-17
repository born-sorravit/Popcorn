$(function() {
    $("#signUp").click(function() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const name = document.getElementById('name').value
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            ons.notification.alert(errorMessage)
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var updateUserProfile = firebase.auth().currentUser;
                updateUserProfile.updateProfile({
                    displayName: name
                }).then(function() {
                    var displayName = user.displayName;
                    console.log(`User with email ${email} signed in and yourname ${displayName}`);
                    window.location.href = "index.html";
                }).catch(function(error) {
                    // An error happened.
                });
            } else {

            }
        });
    })
})