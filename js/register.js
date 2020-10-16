$(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyDyXjr-BUDZTM5MVKdQvDVMlINCofdTFlo",
        authDomain: "popcorn-9afb7.firebaseapp.com",
        databaseURL: "https://popcorn-9afb7.firebaseio.com",
        projectId: "popcorn-9afb7",
        storageBucket: "popcorn-9afb7.appspot.com",
        messagingSenderId: "787336592475",
        appId: "1:787336592475:web:4b54b4d16cb39e033f537e",
        measurementId: "G-9JXPL486H7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();

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