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

    db.collection("logo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center pd-15">
                        <img class="card-img-top logo" src="${doc.data().popcornlogo}" alt="">
                       </div>`;
            $('#list').append(row);
        });
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            console.log(`User with email ${email} signed in`);
            window.location.href = "index.html";
        } else {

        }
    });

    $('#signinemail').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            $('#errormessage').text(errorMessage);
        });
    })

})